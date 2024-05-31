
let circles;
let smallCircles;

function setup() {
  createCanvas(800, 800);
  // Movable large circle data
  circles = [
   {
 // The x and y coordinates of the great circle. The size and color of the circle
      x: 280, y: 280, size: 210, color: color(218, 243, 229),
 // Five laps in total. The number of dots in each circle.
      dotCounts: [20, 23, 23, 25, 35],
// The spacing between each circle of dots.
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
// The color of each circle of dots.
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      drawRays: false,
// color of lines

      rayColor: color(255, 130, 46),
// Number of lines
      numRays: 36,
// Stack the circles together for each layer of color
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
// The size of each layer of the circle stacked together
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20],
      shake: false
    },
    {
      x: 330, y: 40, size: 200, color: color(218, 243, 229),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      drawRays: true,
      rayColor: color(255, 165, 0),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20],
      shake: false
    },
    {
      x: 850, y: 580, size: 210, color: color(255, 153, 51),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      drawRays: true,
      rayColor: color(255, 165, 0),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20],
      shake: false
    },
    {
      x: -20, y: 560, size: 220, color: color(221, 252, 244),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(63, 133, 146), color(63, 133, 146), color(63, 133, 146), color(63, 133, 146), color(63, 133, 146)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(0, 120, 51), color(178, 102, 255), color(0, 120, 51), color(178, 102, 255), color(255, 0, 0), color(128, 128, 128), color(96, 96, 96), color(32, 32, 32), color(0, 102, 0)],
      centerCircleSizes: [115, 105, 95, 85, 75, 60, 50, 40, 30],
      shake: false
    },
    {
      x: 120, y: 100, size: 210, color: color(153, 204, 255),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 0, 102), color(0, 0, 102), color(0, 0, 102), color(0, 0, 102), color(0, 0, 102)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(0, 120, 51), color(178, 102, 255), color(0, 120, 51), color(178, 102, 255), color(255, 0, 0), color(128, 128, 128), color(96, 96, 96), color(32, 32, 32), color(0, 102, 0)],
      centerCircleSizes: [115, 105, 95, 85, 75, 60, 50, 40, 30],
      shake: false
    },
    {
      x: 40, y: 320, size: 210, color: color(255, 204, 153),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 128, 255), color(0, 128, 255), color(0, 128, 255), color(0, 128, 255), color(0, 128, 255)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(0, 0, 0), color(255, 102, 178), color(0, 120, 51), color(0, 0, 0), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [115, 109, 75, 45, 35, 20],
      shake: false
    },
    {
      x: 200, y: 500, size: 210, color: color(255, 213, 71),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(204, 102, 0), color(204, 102, 0), color(204, 102, 0), color(204, 102, 0), color(204, 102, 0)],
      drawRays: true,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20],
      shake: false
    },
    {
      x: 440, y: 460, size: 220, color: color(240, 220, 216),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(255, 0, 0), color(255, 0, 0), color(255, 0, 0), color(255, 0, 0), color(255, 0, 0)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(223, 11, 89), color(255, 74, 171), color(112, 161, 133), color(223, 11, 89), color(51, 51, 51), color(102, 204, 0)],
      centerCircleSizes: [128, 118, 70, 55, 45, 25],
      shake: false
    },
    {
      x: 140, y: 740, size: 210, color: color(255, 250, 250),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(102, 178, 255), color(255, 153, 255), color(141, 169, 144), color(0, 0, 0), color(76, 153, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 115, 105, 95, 75, 55, 30],
      shake: false
    },
    {
      x: 380, y: 680, size: 210, color: color(255, 167, 78),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(205, 33, 129), color(205, 33, 129), color(205, 33, 129), color(205, 33, 129), color(205, 33, 129)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(162, 223, 122), color(125, 154, 122), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 85, 65, 55, 35, 15],
      shake: false
    },
    {
      x: 540, y: 850, size: 195, color: color(255, 250, 250),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(102, 178, 255), color(255, 153, 255), color(141, 169, 144), color(0, 0, 0), color(76, 153, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 115, 105, 95, 75, 55, 30],
      shake: false
    },
    {
      x: 620, y: 620, size: 210, color: color(245, 219, 116),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.98],
      dotColors: [color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(255, 114, 171), color(226, 3, 92), color(125, 154, 122), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 118, 5, 55, 45, 38, 25],
      shake: false
    },
    {
      x: 680, y: 380, size: 220, color: color(254, 255, 229),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.5, 0.6, 0.7, 0.8, 0.9],
      dotColors: [color(255, 135, 14), color(255, 135, 14), color(255, 135, 14), color(255, 135, 14), color(255, 135, 14)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(204, 255, 153), color(255, 102, 255), color(102, 204, 0), color(255, 102, 255), color(102, 204, 0), color(153, 255, 255), color(153, 153, 153), color(102, 102, 102), color(102, 204, 0), color(255, 255, 255)],
      centerCircleSizes: [115, 100, 95, 85, 75, 60, 50, 40, 30, 18],
      shake: false
    },
    {
      x: 500, y: 220, size: 230, color: color(255, 169, 38),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(204, 153, 255), color(204, 153, 255), color(204, 153, 255), color(204, 153, 255), color(204, 153, 255)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(255, 51, 255), color(0, 255, 255), color(255, 51, 255), color(0, 255, 255), color(255, 51, 255), color(128, 128, 128), color(96, 96, 96), color(0, 255, 255), color(255, 0, 0), color(224, 224, 224)],
      centerCircleSizes: [125, 115, 105, 90, 75, 70, 60, 40, 35, 20],
      shake: false
    },
    {
      x: 550, y: -10, size: 210, color: color(255, 250, 250),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(102, 178, 255), color(255, 153, 255), color(141, 169, 144), color(0, 0, 0), color(76, 153, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 115, 105, 95, 75, 55, 30],
      shake: false
    },
    {
      x: 760, y: 820, size: 210, color: color(245, 219, 116),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.98],
      dotColors: [color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(255, 114, 171), color(226, 3, 92), color(125, 154, 122), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 118, 5, 55, 45, 38, 25],
      shake: false
    },
    {
      x: 720, y: 140, size: 210, color: color(255, 178, 102),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(178, 102, 255), color(0, 76, 153), color(0, 76, 153), color(0, 76, 153), color(0, 76, 153)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(0, 0, 0), color(178, 102, 255), color(0, 0, 0), color(102, 102, 102), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 118, 5, 55, 45, 38, 25],
      shake: false
    }
   
  ];
 // Little circles that can't be moved
  smallCircles = [
    {

     x: 150, y: 240, size: 30, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
 // The x axis, the y axis and the size and color of the circle.
    {
      x: 117, y: 230, size: 20, color: color(255, 0, 0),
    },
    {
      x: 97, y: 220, size: 20, color: color(30, 144, 255),
    },
    {
      x: 75, y: 210, size: 20, color: color(0, 255, 0),
    },
    {
      x: 55, y: 200, size: 20, color: color(255, 255, 0),
    },
    {
      x: 27, y: 190, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 0, y: 90, size: 20, color: color(255, 0, 0),
    },
    {
      x: 1, y: 120, size: 20, color: color(30, 144, 255),
    },
    {
      x: 5, y: 170, size: 20, color: color(0, 255, 0),
    },
    {
      x: 3, y: 145, size: 20, color: color(255, 255, 0),
    },
    {
      x: 7, y: 60, size: 20, color: color(255, 255, 0),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [],
      centerCircleSizes: []
    },
    {
      x: 10, y: 20, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 240, y: 160, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 210, y: 185, size: 20, color: color(255, 0, 0),
    },
    {
      x: 190, y: 200, size: 20, color: color(30, 144, 255),
    },
    {
      x: 175, y: 220, size: 20, color: color(0, 255, 0),
    },
    {
      x: 250, y: 125, size: 20, color: color(255, 255, 0),
    },
    {
      x: 240, y: 100, size: 20, color: color(0, 255, 0),
    },
    {
      x: 230, y: 70, size: 20, color: color(30, 144, 255),
    },
    {
      x: 220, y: 40, size: 20, color: color(255, 0, 0),
    },
    {
      x: 210, y: 10, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    //
    {
      x: 360, y: 170, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 330, y: 165, size: 20, color: color(255, 0, 0),
    },
    {
      x: 310, y: 155, size: 20, color: color(30, 144, 255),
    },
    {
      x: 290, y: 150, size: 20, color: color(0, 255, 0),
    },
    {
      x: 270, y: 155, size: 20, color: color(255, 255, 0),
    },
    {
      x: 390, y: 155, size: 20, color: color(0, 255, 0),
    },
    {
      x: 410, y: 131, size: 20, color: color(30, 144, 255),
    },
    {
      x: 430, y: 110, size: 20, color: color(255, 0, 0),
    },
    {
      x: 455, y: 60, size: 20, color: color(255, 255, 0),
    },
    {
      x: 460, y: 90, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    //
    {
      x: 590, y: 115, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 560, y: 110, size: 20, color: color(255, 0, 0),
    },
    {
      x: 535, y: 105, size: 20, color: color(30, 144, 255),
    },
    {
      x: 510, y: 97, size: 20, color: color(0, 255, 0),
    },
    {
      x: 490, y: 90, size: 20, color: color(255, 255, 0),
    },
    {
      x: 610, y: 90, size: 20, color: color(0, 255, 0),
    },
    {
      x: 630, y: 72, size: 20, color: color(30, 144, 255),
    },
    {
      x: 650, y: 50, size: 20, color: color(255, 0, 0),
    },
    {
      x: 670, y: 30, size: 20, color: color(255, 255, 0),
    },
    {
      x: 700, y: 20, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    //
    {
      x: 730, y: 20, size: 20, color: color(255, 0, 0),
    },
    {
      x: 750, y: 25, size: 20, color: color(255, 255, 0),
    },
    {
      x: 780, y: 30, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 640, y: 250, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        {
          x: 630, y: 220, size: 20, color: color(255, 0, 0),
        },
        {
          x: 622, y: 195, size: 20, color: color(30, 144, 255),
        },
        {
          x: 610, y: 170, size: 20, color: color(0, 255, 0),
        },
        {
          x: 605, y: 145, size: 20, color: color(255, 255, 0),
        },
        {
          x: 670, y: 250, size: 20, color: color(0, 255, 0),
        },
        {
          x: 690, y: 255, size: 20, color: color(30, 144, 255),
        },
        {
          x: 710, y: 260, size: 20, color: color(255, 0, 0),
        },
        {
          x: 730, y: 270, size: 20, color: color(255, 255, 0),
        },
        {
          x: 370, y: 205, size: 20, color: color(255, 255, 0),
        },
        {
          x: 760, y: 270, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        //
                //
        {
          x: 640, y: 250, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        {
          x: 630, y: 220, size: 20, color: color(255, 0, 0),
        },
        {
          x: 622, y: 195, size: 20, color: color(30, 144, 255),
        },
        {
          x: 610, y: 170, size: 20, color: color(0, 255, 0),
        },
        {
          x: 605, y: 145, size: 20, color: color(255, 255, 0),
        },
        {
          x: 670, y: 250, size: 20, color: color(0, 255, 0),
        },
        {
          x: 690, y: 255, size: 20, color: color(30, 144, 255),
        },
        {
          x: 710, y: 260, size: 20, color: color(255, 0, 0),
        },
        {
          x: 730, y: 270, size: 20, color: color(255, 255, 0),
        },
        {
          x: 370, y: 205, size: 20, color: color(255, 255, 0),
        },
        {
          x: 760, y: 270, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        //
        {
          x: 170, y: 370, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        {
          x: 170, y: 340, size: 20, color: color(255, 0, 0),
        },
        {
          x: 165, y: 320, size: 20, color: color(30, 144, 255),
        },
        {
          x: 160, y: 300, size: 20, color: color(0, 255, 0),
        },
        {
          x: 155, y: 275, size: 20, color: color(255, 255, 0),
        },
        {
          x: 140, y: 390, size: 20, color: color(0, 255, 0),
        },
        {
          x: 120, y: 405, size: 20, color: color(30, 144, 255),
        },
        {
          x: 100, y: 425, size: 20, color: color(255, 0, 0),
        },
        {
          x: 90, y: 445, size: 20, color: color(255, 255, 0),
        },
        {
          x: 30, y: 445, size: 20, color: color(255, 255, 0),
        },
        {
          x: 10, y: 440, size: 20, color: color(0, 255, 0),
        },
        {
          x: 60, y: 455, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        //
        {
          x: 310, y: 410, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        {
          x: 280, y: 400, size: 20, color: color(255, 0, 0),
        },
        {
          x: 260, y: 395, size: 20, color: color(30, 144, 255),
        },
        {
          x: 240, y: 390, size: 20, color: color(0, 255, 0),
        },
        {
          x: 220, y: 385, size: 20, color: color(255, 255, 0),
        },
        {
          x: 200, y: 380, size: 20, color: color(0, 255, 0),
        },
        {
          x: 335, y: 390, size: 20, color: color(30, 144, 255),
        },
        {
          x: 355, y: 370, size: 20, color: color(255, 0, 0),
        },
        {
          x: 375, y: 350, size: 20, color: color(255, 255, 0),
        },
        {
          x: 400, y: 295, size: 20, color: color(0, 255, 0),
        },
        {
          x: 440, y: 330, size: 20, color: color(0, 255, 0),
        },
        {
          x: 410, y: 330, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        //
        {
          x: 540, y: 360, size: 25, color: color(218, 243, 229),
          dotCounts: [0],
          radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
          dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
          centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
          centerCircleSizes: [40, 30, 20]
        },
        {
          x: 510, y: 350, size: 20, color: color(255, 0, 0),
        },
        {
          x: 490, y: 345, size: 20, color: color(30, 144, 255),
        },
        {
          x: 470, y: 340, size: 20, color: color(255, 255, 0),
        },
        {
          x: 565, y: 340, size: 20, color: color(255, 255, 0),
        },
        {
          x: 575, y: 320, size: 20, color: color(0, 255, 0),
        },
        {
          x: 595, y: 300, size: 20, color: color(30, 144, 255),
        },
        {
          x: 615, y: 280, size: 20, color: color(255, 0, 0),
        },
        {
          x: 790, y: 250, size: 20, color: color(0, 255, 0),
        },
        {
          x: 780, y: 300, size: 20, color: color(255, 0, 0),
        },
        {
          x: 790, y: 320, size: 20, color: color(30, 144, 255),
        },

    {
      x: 580, y: 480, size: 30, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 570, y: 450, size: 20, color: color(255, 0, 0),
    },
    {
      x: 560, y: 430, size: 20, color: color(30, 144, 255),
    },
    {
      x: 555, y: 410, size: 20, color: color(0, 255, 0),
    },
    {
      x: 550, y: 390, size: 20, color: color(255, 255, 0),
    },
    {
      x: 720, y: 520, size: 30, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 610, y: 490, size: 20, color: color(255, 0, 0),
    },
    {
      x: 655, y: 505, size: 20, color: color(30, 144, 255),
    },
    {
      x: 630, y: 500, size: 20, color: color(0, 255, 0),
    },
    {
      x: 680, y: 515, size: 20, color: color(255, 255, 0),
    },
    {
      x: 750, y: 500, size: 20, color: color(0, 255, 0),
    },
    {
      x: 770, y: 480, size: 20, color: color(30, 144, 255),
    },
    {
      x: 790, y: 460, size: 20, color: color(255, 0, 0),
    },
    {
      x: 800, y: 430, size: 20, color: color(255, 255, 0),
    },
    {
      x: 745, y: 678, size: 30, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 725, y: 553, size: 20, color: color(30, 144, 255),
    },
    {
      x: 730, y: 578, size: 20, color: color(255, 0, 0),
    },
    {
      x: 735, y: 600, size: 20, color: color(30, 144, 255),
    },
    {
      x: 740, y: 623, size: 20, color: color(0, 255, 0),
    },
    {
      x: 745, y: 645, size: 20, color: color(255, 255, 0),
    },
    {
      x: 780, y: 680, size: 20, color: color(0, 255, 0),
    },
    {
      x: 790, y: 700, size: 20, color: color(30, 144, 255),
    },
    {
      x: 765, y: 700, size: 15, color: color(255, 0, 0),
    },
    {
      x: 715, y: 700, size: 20, color: color(255, 255, 0),
    },
    {
      x: 695, y: 720, size: 20, color: color(0, 255, 0),
    },
    {
      x: 670, y: 740, size: 20, color: color(225, 0, 0),
    },
    {
      x: 640, y: 760, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 640, y: 795, size: 20, color: color(30, 144, 255),
    },
    {
      x: 515, y: 715, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 610, y: 750, size: 20, color: color(255, 0, 0),
    },
    {
      x: 590, y: 740, size: 20, color: color(30, 144, 255),
    },
    {
      x: 570, y: 730, size: 20, color: color(0, 255, 0),
    },
    {
      x: 545, y: 725, size: 20, color: color(255, 255, 0),
    },
    {
      x: 432, y: 798, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 495, y:740, size: 20, color: color(0, 255, 0),
    },
    {
      x: 475, y: 760, size: 20, color: color(30, 144, 255),
    },
    {
      x: 455, y: 780, size: 20, color: color(255, 0, 0),
    },
    {
      x: 485, y: 590, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 495, y: 620, size: 20, color: color(255, 255, 0),
    },
    {
      x: 500, y: 640, size: 20, color: color(0, 255, 0),
    },
    {
      x: 500, y: 665, size: 20, color: color(225, 0, 0),
    },
    {
      x: 505, y: 685, size: 20, color: color(30, 144, 255),
    },
    {
      x: 640, y: 760, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 560, y: 510, size: 20, color: color(255, 255, 0),
    },
    {
      x: 545, y: 530, size: 20, color: color(0, 255, 0),
    },
    {
      x: 528, y: 550, size: 20, color: color(30, 144, 255),
    },
    {
      x: 508, y: 570, size: 20, color: color(255, 0, 0),
    },
    {
      x: 325, y: 523, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 345, y: 557, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 320, y: 490, size: 20, color: color(255, 0, 0),
    },
    {
      x: 377, y: 565, size: 20, color: color(30, 144, 255),
    },
    {
      x: 450, y: 585, size: 20, color: color(0, 255, 0),
    },
    {
      x: 315, y: 465, size: 20, color: color(255, 255, 0),
    },
    {
      x: 317, y: 440, size: 20, color: color(255, 255, 0),
    },
    {
      x: 260, y: 620, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 210, y: 630, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 290, y: 590, size: 20, color: color(255, 0, 0),
    },
    {
      x: 310, y: 560, size: 20, color: color(30, 144, 255),
    },
    {
      x: 290, y: 150, size: 20, color: color(0, 255, 0),
    },
    {
      x: 270, y: 155, size: 20, color: color(255, 255, 0),
    },
    {
      x: 240, y: 650, size: 20, color: color(0, 255, 0),
    },
    {
      x: 250, y: 670, size: 20, color: color(30, 144, 255),
    },
    {
      x: 255, y: 690, size: 20, color: color(255, 0, 0),
    },
    {
      x: 265, y: 710, size: 20, color: color(255, 255, 0),
    },
    {
      x: 270, y: 740, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 320, y: 810, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 270, y: 770, size: 20, color: color(30, 144, 255),
    },
    {
      x: 260, y: 795, size: 20, color: color(255, 0, 0),
    },
    {
      x: 300, y: 780, size: 20, color: color(0, 255, 0),
    },
    {
      x: 370, y: 800, size: 20, color: color(255, 255, 0),
    },
    {
      x: 110, y: 600, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 140, y: 615, size: 20, color: color(0, 255, 0),
    },
    {
      x: 170, y: 620, size: 20, color: color(30, 144, 255),
    },
    {
      x: 100, y: 570, size: 20, color: color(255, 0, 0),
    },
    {
      x: 83, y: 495, size: 20, color: color(255, 255, 0),
    },
    {
      x: 85, y: 470, size: 20, color: color(0, 255, 0),
    },
    {
      x: 10, y: 710, size: 25, color: color(218, 243, 229),
      dotCounts: [0],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      centerCircleColors: [color(255, 128, 0), color(255, 255, 255), color(0, 0, 0)],
      centerCircleSizes: [40, 30, 20]
    },
    {
      x: 90, y: 630, size: 20, color: color(255, 0, 0),
    },
    {
      x: 66, y: 650, size: 20, color: color(30, 144, 255),
    },
    {
      x: 35, y: 680, size: 20, color: color(0, 255, 0),
    },
    {
      x: 15, y: 750, size: 20, color: color(255, 255, 0),
    },
    {
      x: 20, y: 780, size: 20, color: color(0, 255, 0),
    },
    {
      x: 120, y: 405, size: 20, color: color(30, 144, 255),
    },
    {
      x: 100, y: 425, size: 20, color: color(255, 0, 0),
    },
    {
      x: 90, y: 445, size: 20, color: color(255, 255, 0),
    },
    {
      x: 30, y: 445, size: 20, color: color(255, 255, 0),
    },
    {
      x: 10, y: 440, size: 20, color: color(0, 255, 0),
    },
  ];

  noLoop(); 
}

function draw() {
  background(20, 84, 112);
  drawTheseCircles(circles);
  drawSmallCircles(smallCircles);
}

function drawTheseCircles(circles) {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

// This part of the control of the great circle's jitter, in fact, depends on controlling the coordinates of the x and y axes of the great circle to make him move randomly in this range, like shaking.
    if (circle.shake) { 
      circle.x += random(-5, 5); 
      circle.y += random(-5, 5); 
    }
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);

    if (circle.drawRays) {
      drawRays(circle.x, circle.y, circle.size, circle.numRays, circle.rayColor);
    }

    drawDots(circle.x, circle.y, circle.size, circle.dotCounts, circle.radiusFactor, circle.dotColors);
    drawCenterCircles(circle.x, circle.y, circle.centerCircleColors, circle.centerCircleSizes);
  }
}
// 知识点来自https://stackoverflow.com/questions/62893486/what-is-the-math-behind-creation-of-a-star-in-p5js。
function drawRays(x, y, diameter, numRays, rayColor) {
  stroke(rayColor);
  strokeWeight(6);
  for (let i = 0; i < numRays; i++) {
    let angle = TWO_PI / numRays * i;
    let startX = x + (diameter * 0.25) * cos(angle);
    let startY = y + (diameter * 0.25) * sin(angle);
    let endX = x + (diameter * 0.5) * cos(angle);
    let endY = y + (diameter * 0.5) * sin(angle);
    line(startX, startY, endX, endY);
  }
}
 // 知识点来自https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-127653/。
function drawDots(x, y, diameter, dotCounts, radiusFactor, dotColors) {
  let numRings = dotCounts.length;
  for (let ring = 0; ring < numRings; ring++) {
    let radius = (diameter / 2) * radiusFactor[ring];
    let numDots = dotCounts[ring];
    fill(dotColors[ring]);
    noStroke();
    for (let dot = 0; dot < numDots; dot++) {
      let angle = TWO_PI / numDots * dot;
      let dotX = x + radius * cos(angle);
      let dotY = y + radius * sin(angle);
      ellipse(dotX, dotY, 8, 9);
    }
  }
}
 
function drawCenterCircles(x, y, centerCircleColors, centerCircleSizes) {
  for (let i = 0; i < centerCircleSizes.length; i++) {
    fill(centerCircleColors[i]);
    noStroke();
    ellipse(x, y, centerCircleSizes[i]);
  }
}

function drawSmallCircles(smallCircles) {
  for (let i = 0; i < smallCircles.length; i++) {
    let circle = smallCircles[i];
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
}

 // 知识点来自7.4: Mouse Interaction with Objects - p5.js Tutorial

function mousePressed() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    // Calculating the distance between the mouse position and the center of a circle is from https://p5js.org/zh-Hans/reference/#/p5/dist.
    let d = dist(mouseX, mouseY, circle.x, circle.y);
// Set distance to be less than radius.
    if (d < circle.size / 2) 
{
  // Randomly change the color of the circle, and the values in (r255/b255/g255) randomly change the color.
      circle.color = color(random(255), random(255), random(255));
     
      circle.shake = !circle.shake;
      // Execute the code inside draw() once. This function allows the program to update the display window only when needed, such as when mousePressed() or keyPressed() events are fired.https://p5js.org/zh-Hans/reference/#/p5/redraw。
      redraw();
    }
  }
}
