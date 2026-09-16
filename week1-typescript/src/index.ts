type MemberRole = "leader" | "member";

interface StudyMember {
  id: number;
  name: string;
  role: MemberRole;
  //githubId는 선택값으로 표현
  githubId?: string;
}

//StudyMember 타입의 객체만 들어갈 수 있는 배열 생성
const members: StudyMember[] = [
  {
    id: 1,
    name: "지영",
    role: "member",
    githubId: "jilyoung",
  },
  {
    id: 2,
    name: "민수",
    role: "leader",
  },
];

function findMemberById(id: number): void {
  // 찾고 있는 ID와 회원 ID가 같은지 검사
  const member = members.find((member) => member.id === id);

  // 회원이 존재하는지 확인
  if (!member) {
    console.log(`ID ${id}: 존재하지 않는 회원입니다.`);
    return;
  }

  // 널 병합 연산자
  const githubId = member.githubId ?? "GitHub 아이디 없음";

  console.log(
    `회원 ID ${member.id}: ${member.name} / ${member.role} / GitHub: ${githubId}`,
  );
}

findMemberById(1);
findMemberById(2);
findMemberById(999);
