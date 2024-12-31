/* eslint-disable @typescript-eslint/no-unused-vars */

export function initCaretPositionPolyfill() {
  // 이미 구현되어 있다면 폴리필 불필요
  if ('caretPositionFromPoint' in document) {
    return
  }

  // WebKit/Blink 기반 브라우저용 구현
  if ('caretRangeFromPoint' in document) {
    document.caretPositionFromPoint = function (x, y) {
      try {
        const range = document.caretRangeFromPoint(x, y)

        if (!range) {
          return null
        }

        const clientRect = range.getBoundingClientRect()

        return {
          offsetNode: range.startContainer,
          offset: range.startOffset,
          getClientRect: () => clientRect,
        }
      } catch (e) {
        return null
      }
    }
    return
  }

  // 기본 폴백 구현
  document.caretPositionFromPoint = function (x, y) {
    // 유효하지 않은 좌표 처리
    if (!isValidCoordinate(x, y)) {
      return null
    }

    try {
      const element = document.elementFromPoint(x, y)

      if (!element) {
        return null
      }

      // 텍스트 노드 찾기
      const textNode = findDeepestTextNode(element, x, y)

      if (!textNode) {
        return {
          offsetNode: element,
          offset: 0,
          getClientRect: () => element.getBoundingClientRect(),
        }
      }

      // 텍스트 노드 내에서 가장 가까운 오프셋 찾기
      const offset = findNearestOffset(textNode, x)

      return {
        offsetNode: textNode,
        offset: offset,
        getClientRect: () => {
          const range = document.createRange()
          range.setStart(textNode, offset)
          range.setEnd(textNode, offset)
          return range.getBoundingClientRect()
        },
      }
    } catch (e) {
      return null
    }
  }
}

// 유틸리티 함수들
function isValidCoordinate(x, y) {
  return (
    typeof x === 'number' &&
    typeof y === 'number' &&
    Number.isFinite(x) &&
    Number.isFinite(y) &&
    x >= 0 &&
    y >= 0
  )
}

function findDeepestTextNode(element, x, y) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode: node => {
      const range = document.createRange()
      range.selectNodeContents(node)
      const rect = range.getBoundingClientRect()

      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        return NodeFilter.FILTER_ACCEPT
      }
      return NodeFilter.FILTER_REJECT
    },
  })

  let node = walker.nextNode()
  return node
}

function findNearestOffset(textNode, x) {
  const text = textNode.textContent || ''
  let left = 0
  let right = text.length

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    const range = document.createRange()
    range.setStart(textNode, 0)
    range.setEnd(textNode, mid)
    const rect = range.getBoundingClientRect()

    if (rect.right < x) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}
