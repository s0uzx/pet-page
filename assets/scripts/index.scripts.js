function teste() {

    const nome = document.getElementById("nome").value
    alert(nome);
}

function enviarEmail() {

const public_key = "SkPyKLZyRezJLkVPU";
const secret_key = "g57DaODFrz-93iaDa8HJq";

(function(){
    emailjs.init(public_key);
})();

    const nome = document.getElementById("nome").value;
    const email= document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email|| !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    const serviceID = "service_3c9c3cs"
    const templateID = "template_s2hxojo"

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensagem").value = "";
            console.log(res);
            alert("Mensagem enviada com sucesso para Meu Pet Laranja Lima🍊🐾!")
        })
        .catch((err) => console.log(err));
    }
