const useAnimation = (type: 'slideRight', isIntersecting?: boolean) => {
  return type === 'slideRight'
    ? {
        transition: '500ms',
        transform: isIntersecting ? 'translateX(0)' : 'translateX(-50vw)',
      }
    : {};
};

export default useAnimation;
