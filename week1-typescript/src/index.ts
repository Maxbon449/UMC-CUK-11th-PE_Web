type M_ID = number;

interface members {
  memberId: M_ID;
  memberName: string;
  memberRole: "leader" | "member";
  memberGithubId?: string;
};

const newMembers: members[] = [
    { memberId: 1, memberName: "서해승", memberRole: "member", memberGithubId: "haeseo77" },
    { memberId: 2, memberName: "김광수", memberRole: "leader" }
];

function checkMember(memberId: M_ID): string {
    const member = newMembers.find(m => m.memberId === memberId);
    if (!member) {
        return `회원이 없습니다.`;
    }
    const role = member.memberRole === "leader" ? "스터디를 이끌어요" : "스터디에 참여해요.";
    
    if (!member.memberGithubId) {
        return `${member.memberName} 회원은 ${role} GitHub ID는 가지고 있지 않습니다.`;
    }

    return `${member.memberName} 회원은 ${role} GitHub ID는 ${member.memberGithubId}입니다.`;
}

console.log(checkMember(1));
console.log(checkMember(2));
console.log(checkMember(999));