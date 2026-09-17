"use strict";
const members = [
    {
        id: 1,
        name: "김재범",
        role: "leader",
        githubId: "kinjaebeom",
    },
    {
        id: 2,
        name: "홍길동",
        role: "member",
    },
];
function getMemberInfo(memberId) {
    const member = members.find((member) => member.id === memberId);
    if (!member) {
        return `회원 ID ${memberId}에 해당하는 회원을 찾을 수 없습니다.`;
    }
    const githubId = member.githubId ?? "등록되지 않음";
    return [
        `회원 ID: ${member.id}`,
        `이름: ${member.name}`,
        `역할: ${member.role}`,
        `GitHub ID: ${githubId}`,
    ].join("\n");
}
console.log("[회원 ID 1]");
console.log(getMemberInfo(1));
console.log("\n[회원 ID 2]");
console.log(getMemberInfo(2));
console.log("\n[회원 ID 999]");
console.log(getMemberInfo(999));
