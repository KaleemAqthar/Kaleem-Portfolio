import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 70;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

const DockContext = createContext(undefined);

function DockProvider({ children, value }) {
  return (
    <DockContext.Provider value={value}>
      {children}
    </DockContext.Provider>
  );
}

function useDock() {
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("useDock must be used inside DockProvider");
  }

  return context;
}

function Dock({
  children,
  className = "",
  spring = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(() => {
    return Math.max(
      DOCK_HEIGHT,
      magnification + magnification / 2 + 4
    );
  }, [magnification]);

  const heightTransform = useTransform(
    isHovered,
    [0, 1],
    [panelHeight, maxHeight]
  );

  const height = useSpring(
    heightTransform,
    spring
  );

  return (
    <motion.div
      style={{
        height,
        scrollbarWidth: "none",
      }}
      className="flex max-w-full items-end overflow-x-auto px-2"
    >
      <motion.div
        onMouseMove={(event) => {
          isHovered.set(1);
          mouseX.set(event.pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`
          mx-auto
          flex
          w-fit
          items-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-[#111111]/95
          px-4
          shadow-2xl
          backdrop-blur-xl
          ${className}
        `}
        style={{
          height: panelHeight,
        }}
      >
        <DockProvider
          value={{
            mouseX,
            spring,
            distance,
            magnification,
          }}
        >
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({
  children,
  className = "",
}) {
  const ref = useRef(null);

  const {
    distance,
    magnification,
    mouseX,
    spring,
  } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(
    mouseX,
    (value) => {
      const rect =
        ref.current?.getBoundingClientRect() ?? {
          x: 0,
          width: 0,
        };

      return (
        value -
        rect.x -
        rect.width / 2
      );
    }
  );

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [42, magnification, 42]
  );

  const width = useSpring(
    widthTransform,
    spring
  );

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() =>
        isHovered.set(1)
      }
      onHoverEnd={() =>
        isHovered.set(0)
      }
      onFocus={() =>
        isHovered.set(1)
      }
      onBlur={() =>
        isHovered.set(0)
      }
      className={`
        relative
        inline-flex
        aspect-square
        items-center
        justify-center
        ${className}
      `}
    >
      {Children.map(
        children,
        (child) =>
          cloneElement(child, {
            width,
            isHovered,
          })
      )}
    </motion.div>
  );
}

function DockLabel({
  children,
  className = "",
  isHovered,
}) {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    if (!isHovered) return;

    const unsubscribe =
      isHovered.on(
        "change",
        (latest) => {
          setVisible(latest === 1);
        }
      );

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: -10,
          }}
          exit={{
            opacity: 0,
            y: 0,
          }}
          transition={{
            duration: 0.15,
          }}
          className={`
            absolute
            -top-9
            left-1/2
            z-50
            -translate-x-1/2
            whitespace-nowrap
            rounded-md
            border
            border-white/10
            bg-[#181818]
            px-2
            py-1
            text-xs
            text-white
            shadow-xl
            ${className}
          `}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({
  children,
  className = "",
  width,
}) {
  const iconWidth = useTransform(
    width,
    (value) => value / 2
  );

  return (
    <motion.div
      style={{
        width: iconWidth,
      }}
      className={`
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export {
  Dock,
  DockItem,
  DockLabel,
  DockIcon,
};