const useAnimation = (
  type: 'slideRight' | 'slideLeft',
  isIntersecting?: boolean
) => {
  return type === 'slideRight'
    ? {
        transition: '500ms',
        transform: isIntersecting ? 'translateX(0)' : 'translateX(-50vw)',
      }
    : type === 'slideLeft'
    ? {
        transition: '500ms',
        transform: isIntersecting ? 'translateX(0)' : 'translateX(50vw)',
      }
    : {};
};

export default useAnimation;
