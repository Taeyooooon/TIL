// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

// 풀이
// arr1 구조와 같은 배열 생성
// 2중 for 문으로 arr1과 arr2의 같은 인덱스의 값을 더해 answer에 push
// j for문 돌고 나서 다음 인덱스 배열 값 초기화 후 다시 진행

function solution(arr1, arr2) {
  const answer = Array(arr1.length).fill([]);
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = []
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}