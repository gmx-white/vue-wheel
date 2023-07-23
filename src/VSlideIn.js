// 一个vue自定义指令：元素的平滑移入，有时间再写详细注释
const DISTANCE = 10;
const DURATION = 500;
const EASE = "ease";
const animationMap = new WeakMap();
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const animation = animationMap.get(entry.target);
      animation.play();
      ob.unobserve(entry.target);
    }
  }
});
const isBelowViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top > window.innerHeight;
};
export default {
  mounted(el) {
    if (!isBelowViewport(el)) {
      return;
    }
    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}%)`,
          opacity: 0.5,
        },
        {
          transform: `translateY(0)`,
          opacity: 1,
        },
      ],
      {
        duration: DURATION,
        ease: EASE,
      }
    );
    animationMap.set(el, animation);
    animation.pause();
    ob.observe(el);
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};
