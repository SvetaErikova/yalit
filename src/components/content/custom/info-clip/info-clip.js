const infoClip = document.querySelector('.info-clip')

if (infoClip) {
  const blockClip = infoClip.querySelector('.block-clip')
  const clipHead = blockClip.querySelector('.block--head')
  ScrollTrigger?.config({ ignoreMobileResize: true })

  const createClip = (expandDuration, scrollDistance, scale) => {
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: infoClip,
        start: 'top top',
        end: () => '+=' + window.innerHeight * scrollDistance,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    tl.to(blockClip, {
      width: '100%',
      height: `${scale}vh`,
      duration: expandDuration,
    })
    tl.to(blockClip, {
      borderRadius: 0,
      duration: expandDuration / 2,
    }, `<${expandDuration / 2}`)

    tl.fromTo(clipHead, {
      opacity: 0,
      y: 72,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.35,
    })
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    createClip(0.75, 1.25, 120)
  } else {
    createClip(1, 1.6, 170)
  }
}
