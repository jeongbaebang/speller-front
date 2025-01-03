interface CaretPosition {
  offsetNode: Node
  offset: number
  getClientRect?: () => DOMRect | null
}

declare global {
  interface Document {
    caretPositionFromPoint?(x: number, y: number): CaretPosition | null
    caretRangeFromPoint?(x: number, y: number): Range | null
  }
}

// 모듈로 인식되도록 export 추가
export {}
