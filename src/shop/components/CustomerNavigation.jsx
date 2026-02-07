import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Home, User, History, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CustomerNavigation() {
  const navigate = useNavigate();
  
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  
  const spring = { mass: 0.1, stiffness: 150, damping: 12 };
  const magnification = 70;
  const distance = 200;
  const panelHeight = 68;
  const baseItemSize = 50;
  const dockHeight = 256;

  const items = [
    { icon: <Home size={18} color="white" />, label: 'Home', onClick: () => navigate('/Menu') },
    { icon: <History size={18} color="white" />, label: 'Order History', onClick: () => navigate('/Menu/Orders') },
    { icon: <ShoppingCart size={18} color="white" />, label: 'Cart', onClick: () => navigate('/Menu/Cart') },
    { icon: <User size={18} color="white" />, label: 'Profile', onClick: () => navigate('/Menu/Profile') },
  ];

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div style={{ height, scrollbarWidth: 'none' }} className="fixed bottom-0 left-0 right-0 mx-2 flex max-w-full items-center z-50">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className="absolute bottom-2 bg-white left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-black border-2 pb-2 px-4"
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => {
          const ref = useRef(null);
          const itemHovered = useMotionValue(0);
          const [showLabel, setShowLabel] = useState(false);

          const mouseDistance = useTransform(mouseX, val => {
            const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
            return val - rect.x - baseItemSize / 2;
          });

          const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
          const size = useSpring(targetSize, spring);

          useEffect(() => {
            const unsubscribe = itemHovered.on('change', latest => setShowLabel(latest === 1));
            return () => unsubscribe();
          }, [itemHovered]);

          return (
            <motion.div
              key={index}
              ref={ref}
              style={{ width: size, height: size }}
              onHoverStart={() => itemHovered.set(1)}
              onHoverEnd={() => itemHovered.set(0)}
              onFocus={() => itemHovered.set(1)}
              onBlur={() => itemHovered.set(0)}
              onClick={item.onClick}
              className="relative inline-flex items-center justify-center rounded-2xl bg-[#060010] border-2 shadow-md cursor-pointer"
              tabIndex={0}
              role="button"
              aria-haspopup="true"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>

              <AnimatePresence>
                {showLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white"
                    role="tooltip"
                    style={{ x: '-50%' }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}