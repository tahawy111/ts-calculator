let output = document.getElementById("calc")! as HTMLInputElement;

function display(num: string): void {
    output.value += num;
};
function Clear(): void {
    output.value = "";
};
function Delete(): void {
    output.value = output.value.slice(0, -1);
};

function calc(): void {
    output.value = eval(output.value);
};