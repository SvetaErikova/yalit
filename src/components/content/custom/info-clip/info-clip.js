const infoClip = document.querySelector('.info-clip')

if (infoClip) {
  const blockClip = infoClip.querySelector('.block-clip')
  const clipHead = blockClip.querySelector('.block--head')

  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: infoClip,
      start: 'top top',
      end: () => '+=' + window.innerHeight * 1.6,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    },
  })

  tl.to(blockClip, {
    width: '100%',
    height: '170vh',
    duration: 1,
  })
  tl.to(blockClip, {
    borderRadius: 0,
    duration: 0.5
  }, '<0.5')

  tl.fromTo(clipHead, {
    opacity: 0,
    y: 72,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.35,
  })
}
