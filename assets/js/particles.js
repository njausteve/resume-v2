import { Power2, TimelineMax, TweenMax } from 'gsap'
/*
    params = {
      mountContainerSelector: "#csisOb"
      imagePath: 'https://image.ibb.co/f4nCHS/btcLogo.jpg',
      startColor: ["#0d2a75", "#1d5cd2", "#1c3498"],
      backGroundColor: "#000529"
    }
*/

const initSketch = ({ mountContainerSelector, imagePath, starsColor, backgroundColor }) => {
  const P5 = require('P5')
  const container = document.querySelector(mountContainerSelector)

  let containerWidth = getContainerWidth(container)
  let containerHeight = getContainerHeight(container)

  /* eslint-disable */
  const sketchIt = new P5(sketch, 'csisOb')

  animateOpening()

  function sketch (p) {
    P5.disableFriendlyErrors = true

    // let btc
    const Stars = []
    const smallSize = 80
    const scaleFactor = (containerWidth * 0.35) / smallSize
    const translate = {
      x: containerWidth / 2,
      y: (containerHeight - containerWidth * 0.35) / 2
    }
    const positions = {
      btc: []
    }

    const RandomStars = []
    // const center = translatePoint(p.createVector(smallSize / 2, smallSize / 2))
    const bgColor = p.color(backgroundColor)

    function translatePoint (vector) {
      const newX = vector.x * scaleFactor + translate.x
      const newY = vector.y * scaleFactor + translate.y
      const newVec = p.createVector(newX, newY)
      return newVec
    }

    /* PARTICLE OF THE IMAGE */
    function Star (vector) {
      this.x = vector.x
      this.y = vector.y
      this.pos = p.createVector(
        p.random(containerWidth * -1.2, containerWidth * 1.2),
        p.random(containerWidth * -1.2, containerHeight * 1.2)
      )

      /* initial position */
      this.target = p.createVector(this.x, this.y)
      this.color = p.random(starsColor)
      this.size = p.random(2, 4)
      this.vel = p.createVector(p.random(-5, 6), p.random(-4, 6))
      this.acc = p.createVector()
      this.maxSpeed = 100
      this.maxForce = 2
      this.weight = p.random(0.5, 1.5)
      this.allowRepulse = false
      this.goingCenter = false
    }

    Star.prototype.update = function () {
      this.pos.add(this.vel)
      this.vel.add(this.acc)

      this.acc.mult(0)
    }

    Star.prototype.move = function () {
      const attract = this.attract(this.target)
      this.appForce(attract)

      const mouse = p.createVector(p.mouseX, p.mouseY)
      const repulse = this.repulse(mouse)
      this.appForce(repulse)
    }

    Star.prototype.appForce = function (value) {
      this.acc.add(value)
    }

    Star.prototype.modAlpha = function () {
      const desired = P5.Vector.sub(this.target, this.pos)
      const d = desired.mag()
      const opacity = p.map(d, 0, 800, 255, 0)
      return opacity
    }

    Star.prototype.attract = function (target) {
      const desired = P5.Vector.sub(target, this.pos)
      const d = desired.mag() // distance between target and position
      if (d < 100 && !this.goingCenter) {
        this.vel.limit(10)
        if (d < 10 && !this.allowRepulse) {
          const G = 70
          const distancesq = desired.magSq()

          const force = distancesq / G
          desired.setMag(force * this.weight)
          this.vel.limit(0.7)
          return desired
        }
      } else {
        const G = 400000
        const distancesq = desired.magSq()
        const force = G / distancesq
        desired.setMag(force)
        this.vel.limit(7)
        return desired
      }
    }

    Star.prototype.repulse = function (target) {
      const desired = P5.Vector.sub(target, this.pos)
      const d = desired.mag()
      if (d < 80) {
        this.allowRepulse = true
        const distancesq = desired.magSq()
        const force = (500 / distancesq) * this.weight
        desired.setMag(-force)
        return desired
      } else {
        this.allowRepulse = false
        return p.createVector(0, 0)
      }
    }

    Star.prototype.render = function () {
      p.noStroke()
      const color = p.color(this.color)
      color.setAlpha(this.modAlpha())
      p.fill(color)
      p.ellipse(this.pos.x, this.pos.y, this.size, this.size)
    }

    // PARTICLE MOVING RANDOMLY
    function RandomStar () {
      this.pos = p.createVector(
        p.random(containerWidth),
        p.random(containerHeight)
      )
      this.vel = p.createVector(p.random(-3, 3), p.random(-3, 3))
      this.weight = p.random(0.5, 1.5)
      this.size = p.random(2, 4)
      this.corner = p.createVector(0, 0)
      this.color = p.color(p.random(starsColor))
    }

    RandomStar.prototype.modAlpha = function (dist) {
      const alpha = p.map(dist, 0, containerWidth * 0.8, 0, 255)
      return alpha
    }

    RandomStar.prototype.checkBoundaries = function () {
      if (this.pos.x > containerWidth || this.pos.x < 0) {
        this.vel.x = this.vel.x * -1
      }
      if (this.pos.y > containerHeight || this.pos.y < 0) {
        this.vel.y = this.vel.y * -1
      }
    }

    RandomStar.prototype.update = function () {
      this.checkBoundaries()
      this.pos.add(this.vel)

      const dist = this.pos.sub(this.corner)
      this.alpha = this.modAlpha(dist.mag())
    }

    RandomStar.prototype.render = function () {
      const c = this.color
      c.setAlpha(this.alpha)
      p.fill(c)
      p.ellipse(this.pos.x, this.pos.y, this.size, this.size)
    }

    // CREATE RANDOMSTAR
    for (let i = 0; i < 150; i++) {
      const randStar = new RandomStar()
      RandomStars.push(randStar)
    }

    p.setup = function () {
      p.createCanvas(containerWidth, containerHeight, 'WEBGL')
      p.pixelDensity(1)
      p.background(bgColor)
      const btc = p.loadImage(imagePath, function (img) {
        // p.image(img, 0, 0);
        btc.resize(smallSize, smallSize)
        btc.loadPixels()
        for (let x = 0; x < btc.width; x++) {
          for (let y = 0; y < btc.height; y++) {
            const index = (x + y * btc.width) * 4
            if (btc.pixels[index] < 200) {
              // if channel red < 200 == black in this case
              if (Math.round(p.random(100)) < 70) {
                // get only % of the points, randomly
                const initVec = p.createVector(x, y)
                const pos = translatePoint(initVec)
                positions.btc.push(pos)
                Stars.push(new Star(pos))
              }
            }
          }
        }
      }) // close callback loader image
      p.pixelDensity()
    }

    p.draw = function () {
      p.background(bgColor)
      for (let k = 0; k < Stars.length; k++) {
        Stars[k].move()
        Stars[k].update()
        Stars[k].render()
      }
      for (let j = 0; j < RandomStars.length; j++) {
        RandomStars[j].update()
        RandomStars[j].render()
      }
    }

    p.windowResized = function () {
      containerWidth = getContainerWidth(container)
      containerHeight = getContainerHeight(container)

      p.resizeCanvas(containerWidth, containerHeight)
    }
  }

  function animateOpening () {
    const tlOpening = new TimelineMax({
      onStart () {
        TweenMax.fromTo(
          '#csisOb',
          2,
          { autoAlpha: 0 },
          { autoAlpha: 1 }
        )
      },
      delay: 1
    })

    tlOpening
      .fromTo(
        '.iwpLQK > h2 > span',
        1.8,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, ease: Power2.easeOut },
        2.2
      )
      .fromTo(
        '.iwpLQK > p > span',
        1.8,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, ease: Power2.easeOut },
        2.4
      )
      .fromTo(
        '.iwpLQK > div > button > span > span',
        1,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        3.2
      )
  }

  function getContainerWidth (container) {
    return container.clientWidth
  }

  function getContainerHeight (container) {
    return container.clientHeight
  }
}

export default initSketch
