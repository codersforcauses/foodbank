interface BoundingBox {
  x1: number
  y1: number
  x2: number
  y2: number
}

interface Vector2 {
  x: number
  y: number
}

const inBoundingBox = (box: BoundingBox, point: Vector2) =>
  point.x < box.x2 && point.x > box.x1 && point.y < box.y2 && point.y > box.y1

export type { BoundingBox, Vector2 }
export { inBoundingBox }
