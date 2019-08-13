import React, {
  Fragment,
  useEffect,
  useRef,
  useCallback,
  useState
} from "react";
import { useSprings, a } from "react-spring";
import { animated, Keyframes, Spring } from "react-spring/renderprops";
import { useGesture } from "react-use-gesture";
import styled from "@emotion/styled/macro";
import { AppContext } from "../AppProvider";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const AnimatedCarouselControls = styled(({ ...props }) => (
  <animated.div {...props} />
))`
  position: absolute;
  right: 0;
  left: 0;
  height: 3em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    height: 5em;
    top: 1em;
  }
`;

const StyledCarouselControls = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 1em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    padding: 0 3em;
  }
`;

const StyledCarouselProgressBar = styled.div`
  background-color: rgba(21, 37, 64, 0.1);
  height: 0.25em;
  max-width: 50em;
  position: absolute;
  width: calc(100% - 8em);
  top: -2em;
  left: 7em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    position: relative;
    width: 60%;
    top: 0;
    left: 0;
  }
`;

const StyledCarouselProgressBarText = styled.div`
  position: absolute;
  top: -1.5em;
  right: 0;
`;

const StyledCarouselProgressBarTracker = styled.div`
  height: 100%;
  background-color: #152540;
  position: absolute;
  width: ${props => props.percent}%;
`;

const StyledCarouselOptions = styled.div`
  position: absolute;
  right: 1em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    position: relative;
    right: auto;
  }
`;

const StyledCarouselNavItems = styled.ul``;

const StyledInfiniteCarousel = styled.div`
  pointer-events: ${props => !props.isShifted && "none"};
  overflow-x: ${props => !props.isShifted && "hidden"};
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 5em;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    top: 0;
  }
`;

const StyledCarouselNavItem = styled.li`
  display: inline-block;

  > a {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: "futura pt demi";
    color: #152540;
    text-decoration: none;
    font-size: 1.125rem;

    @media only screen and (min-width: ${DESKTOP_UP}px) {
      font-size: 1.25rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &:first-child {
    margin-right: 2em;
  }
`;

const StyledCarouselCloseButton = styled.a`
  display: none;

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: "Futura PT Demi", Helvetica, Arial;
    color: #152540;
    text-decoration: none;
    font-size: 1.125rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const AnimatedCarouselSlider = styled(({ ...props }) => (
  <animated.div {...props} />
))`
  position: absolute;
  height: 90%;
  width: 100%;
  max-height: 720px;
  overflow-x: hidden;
  top: 3em;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    top: 7em;
  }
`;

const Carousel = Keyframes.Spring({
  shift: async call => {
    await delay(600);
    await call({ delay: 0, x: 0, opacity: 1, y: 0 });
  },
  unshift: async (next, cancel, props, x) => {
    await next({ delay: 0, x: props.translateX, opacity: 0, y: -100 });
  }
});

const InfiniteCarousel = ({
  items,
  width = 600,
  visible = 4,
  style,
  children,
  translateX = 0,
  isShifted = true,
  onUnshift,
  tensionModifier,
  baseFriction,
  frictionModifier,
  handleIsSiteHeaderShown
}) => {
  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [
    items
  ]);
  const getPos = useCallback(
    (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
    [idx]
  );
  const calculatePercent = useCallback(
    offset =>
      (((offset < 0 ? items.length * width + offset : offset) %
        (items.length * width)) /
        (items.length * width)) *
      100,
    [items, width]
  );
  const [springs, setSprings, stopSprings] = useSprings(items.length, i => ({
    x: (i < items.length - 1 ? i : -1) * width
  }));
  const [percent, setPercent] = useState(0);
  const transform = x => x.interpolate(x => `translate3d(${x}px,0,0)`);

  const runSprings = useCallback(
    (y, vy, action) => {
      const firstVis = idx(Math.floor(y / width) % items.length);
      const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1;

      setSprings(i => {
        const position = getPos(i, firstVis, firstVisIdx);
        const prevPosition = getPos(i, prev.current[0], prev.current[1]);
        const rank =
          firstVis - (y < 0 ? items.length : 0) + position - firstVisIdx;
        const configPos = vy > 0 ? position : items.length - position;
        return {
          x: (-y % (width * items.length)) + width * rank,
          immediate: vy < 0 ? prevPosition > position : prevPosition < position,
          config: {
            tension: (1 + items.length - configPos) * tensionModifier,
            friction: baseFriction + configPos * frictionModifier
          }
        };
      });

      prev.current = [firstVis, firstVisIdx];
      prevAction.current = action;

      setPercent(calculatePercent(y));
    },
    [
      idx,
      getPos,
      width,
      visible,
      setSprings,
      setPercent,
      items.length,
      frictionModifier,
      tensionModifier,
      baseFriction
    ]
  );

  const resetCarousel = useCallback(() => {
    dragOffset.current = 0;
    prevDragOffset.current = 0;
    prevAction.current = null;
    prev.current = [0, 1];
    setSprings(i => ({
      x: (i < items.length - 1 ? i : -1) * width,
      immediate: true
    }));
  }, [items.length, width]);

  const prev = useRef([0, 1]);
  const prevDragOffset = useRef(0);
  const dragOffset = useRef(0);
  const prevAction = useRef(null);

  const bind = useGesture({
    onDrag: ({ delta: [deltaX], vxvy: [vx], first }) => (
      (dragOffset.current =
        first && prevAction.current === "drag"
          ? prevDragOffset.current
          : dragOffset.current),
      (prevDragOffset.current = dragOffset.current - deltaX),
      runSprings(prevDragOffset.current, -vx, "drag")
    )
  });

  useEffect(() => {
    handleIsSiteHeaderShown(!isShifted);

    if (!isShifted) {
      resetCarousel();
    }
  }, [isShifted]);

  useEffect(() => {
    resetCarousel();
  }, [width, tensionModifier]);

  return (
    <StyledInfiniteCarousel isShifted={isShifted}>
      <Carousel
        native
        state={isShifted ? "shift" : "unshift"}
        translateX={translateX}
      >
        {({ x, y, opacity }) => (
          <Fragment>
            <AnimatedCarouselControls
              style={{
                opacity: opacity.interpolate(o => o),
                transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`)
              }}
            >
              <StyledCarouselControls>
                <StyledCarouselProgressBar>
                  <StyledCarouselProgressBarText>
                    ({Math.round((percent / 100) * items.length) + 1} /{" "}
                    {items.length})
                  </StyledCarouselProgressBarText>
                  <Spring from={{ percent: 0 }} to={{ percent: percent }}>
                    {({ percent }) => (
                      <StyledCarouselProgressBarTracker percent={percent} />
                    )}
                  </Spring>
                </StyledCarouselProgressBar>
                <StyledCarouselOptions>
                  <StyledCarouselNavItems>
                    <StyledCarouselNavItem>
                      <a
                        href="javascript:void(0)"
                        onClick={() => {
                          const offset =
                            prevAction.current === "prevButton" ||
                            prevAction.current === "nextButton"
                              ? dragOffset.current
                              : prevDragOffset.current;

                          const prevIndex = Math.ceil(
                            offset === 0
                              ? items.length - 1
                              : Math.floor(offset / width) -
                                  (prevAction.current === "prevButton" ||
                                  prevAction.current === "nextButton"
                                    ? 1
                                    : 0)
                          );

                          const y = prevIndex * width;

                          runSprings(y, -1, "prevButton");

                          dragOffset.current = y;
                        }}
                      >
                        Previous
                      </a>
                    </StyledCarouselNavItem>
                    <StyledCarouselNavItem>
                      <a
                        href="javascript:void(0)"
                        onClick={() => {
                          const offset =
                            prevAction.current === "nextButton" ||
                            prevAction.current === "prevButton"
                              ? dragOffset.current
                              : prevDragOffset.current;

                          const nextIndex = Math.ceil(
                            offset === (items.length - 1) * width
                              ? 0
                              : Math.floor(offset / width) + 1
                          );

                          const y = nextIndex * width;

                          runSprings(y, 1, "nextButton");

                          dragOffset.current = y;
                        }}
                      >
                        Next
                      </a>
                    </StyledCarouselNavItem>
                  </StyledCarouselNavItems>
                </StyledCarouselOptions>
                <StyledCarouselCloseButton
                  onClick={() => {
                    onUnshift();
                  }}
                >
                  Close
                </StyledCarouselCloseButton>
              </StyledCarouselControls>
            </AnimatedCarouselControls>

            <AnimatedCarouselSlider
              {...bind()}
              style={{
                ...style,
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
              }}
            >
              {springs.map(({ x, vel }, i) => (
                <a.div
                  key={i}
                  style={{
                    position: "absolute",
                    height: "100%",
                    willChange: "transform",
                    width,
                    transform: transform(x)
                  }}
                  children={children(items[i], i)}
                />
              ))}
            </AnimatedCarouselSlider>
          </Fragment>
        )}
      </Carousel>
    </StyledInfiniteCarousel>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsSiteHeaderShown }) => (
      <InfiniteCarousel
        {...props}
        handleIsSiteHeaderShown={handleIsSiteHeaderShown}
      />
    )}
  </AppContext.Consumer>
);
