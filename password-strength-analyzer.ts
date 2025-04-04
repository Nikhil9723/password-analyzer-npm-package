function checkPassword(password: string) {
    let strength: "Weak" | "Medium" | "Strong" = "Weak";
    let suggestion:string[] = [];

    if(password.length < 8) {
        suggestion.push("Use at least 8 characters");
    }

    if(!/[A-Z]/.test(password)) {
        suggestion.push("Use at least one uppercase letter");
    }

    if(!/[a-z]/.test(password)) {
        suggestion.push("Use at least one lowercase letter");
    }

    if(!/[0-9]/.test(password)) {
        suggestion.push("Include at least one number");
    }

    if(!/[^A-Za-z0-9]/.test(password)) {
        suggestion.push("Add special characters (!@#$%^&*)");
    }

    if(password.length >= 8 && suggestion.length <= 1) {
        strength = "Strong";
    } else if (password.length >=8 && suggestion.length <= 3) {
        strength = "Medium";
    }

    return {strength, suggestion};
}


export default checkPassword;