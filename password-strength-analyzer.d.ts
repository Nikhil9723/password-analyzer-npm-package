declare function checkPassword(password: string): {
    strength: "Weak" | "Medium" | "Strong";
    suggestion: string[];
};
export default checkPassword;
