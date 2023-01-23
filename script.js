let Contacts=[];
let bouton1 = document.querySelector('.bout1')
let bouton2 = document.querySelector('.bout2')
const form = document.querySelector('form');
const idInput = document.querySelector('#Id');
const firstNameInput = document.querySelector('#Prénom');
const lastNameInput = document.querySelector('#Nom');
const phoneInput = document.querySelector('#Telephone');
const groupSelect = document.querySelector('.group');
const emailInput = document.querySelector('#email');
const bioInput = document.querySelector('#bio');
const avatarInput = document.querySelector('#avatar');
const createButton = document.querySelector('.bout1');
const resetButton = document.querySelector('.bout2');
let contactList = document.querySelector('.ListeDesContacts');
let contactElement = document.createElement('div');
let avatarElement = document.createElement('img');
let infoElement = document.createElement('div');
let confirm;

//=======First Name Validation=========
function validPrenom(){
  let prenom = form.elements.Prénom.value
  if (prenom.length < 3) {
      if (prenom.length === 0) {
          document.getElementById("Prénom").style.borderColor = "";
          document.getElementById("prenomErr").style.color=""
          document.getElementById("prenomErr").innerHTML = "";
        }else{
      document.getElementById("Prénom").style.borderColor = "red";
      document.getElementById("prenomErr").style.color="red"
      document.getElementById("prenomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec plus de 3 caractères</p>`;
  }
    }else if (prenom.length > 50) {
      document.getElementById("Prénom").style.borderColor = "red";
      document.getElementById("prenomErr").style.color="red"
      document.getElementById("prenomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec moin de 50 caractères</p>`;
    }else{
      document.getElementById("Prénom").style.borderColor = "";
          document.getElementById("prenomErr").style.color=""
          document.getElementById("prenomErr").innerHTML = "";
    }
}

//=============Name Validation==============
function validNom(){
  let nom = form.elements.Nom.value
  if (nom.length < 3) {
      if (nom.length === 0) {
          document.getElementById("Nom").style.borderColor = "";
          document.getElementById("nomErr").style.color=""
          document.getElementById("nomErr").innerHTML = "";
        }else{
      document.getElementById("Nom").style.borderColor = "red";
      document.getElementById("nomErr").style.color="red"
      document.getElementById("nomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec plus de 3 caractères</p>`;
  }
    }else if (nom.length > 50) {
      document.getElementById("Nom").style.borderColor = "red";
      document.getElementById("nomErr").style.color="red"
      document.getElementById("nomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec moin de 50 caractères</p>`;
    }else{
      document.getElementById("Nom").style.borderColor = "";
          document.getElementById("nomErr").style.color=""
          document.getElementById("nomErr").innerHTML = "";
    }
}

//==========Validation Number=========
function validPhone(){
  let Telephone = form.elements.Telephone.value;
  let phoneRegex = /^\d+$/;
  let validPrefixes = ["084", "085", "080", "089", "081", "082", "083", "099", "097", "097", "090"];
  if(!phoneRegex.test (Telephone)){
    document.getElementById('Telephone').style.borderColor ='red';
    document.getElementById('phoneErr').style.color='red';
    document.getElementById('phoneErr').innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Renseigner un numéro de téléphone valide</p>`;
  }else if (Telephone.length !==10){
    document.getElementById('Telephne').style.borderColor = 'red';
    document.getElementById('phoneErr').style.color = 'red';
    document.getElementById('phoneErr').innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Renseigner un numéro de téléphone avec au moins 10 chiffres</p>`;
  }else if (!validPrefixes.includes(Telephone.substring(0, 3))) {
    document.getElementById('Telephone').style.borderColor = 'red';
    document.getElementById('phoneErr').style.color = 'red';
    document.getElementById('phoneErr').innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Renseigner un numéro de téléphone au format valide</p>`;
  }else{
    document.getElementById('Telephone').style.borderColor ='';
    document.getElementById('phoneErr').style.color ='';
    document.getElementById('phoneErr').innerHTML = '';
  }
}
// =======validation email=========
function validEmail() {
  let email = form.elements.email.value
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailRegex.test(email)) {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("errorEmail").style.color="red"
      document.getElementById("errorEmail").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Veuillez saisir une adresse email valide</p>`;
      return false;
    } else {
      document.getElementById("email").style.borderColor = "";
      document.getElementById("errorEmail").style.color="";
      document.getElementById("errorEmail").innerHTML = "";
      return true;
    }
}
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log( 'debut'+ idInput.value);
  if(!avatarInput.files[0]){
    const id = Contacts.length + 1;
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const phone = phoneInput.value;
    const group = groupSelect.value;
    const email = emailInput.value;
    const bio = bioInput.value;
    const avatar ='./avatar.png';
   
    const contact = {
        id,
        firstName,
        lastName,
        phone,
        group,
        email,
        bio,
        avatar
      };
      
      Contacts.push(contact);
      if (idInput.value=='new') {
        addContactToList(contact);
      } else {
       
        editContactToList(contact);
      }
      
  }else {
    const id = Contacts.length + 1;
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const phone = phoneInput.value;
    const group = groupSelect.value;
    const email = emailInput.value;
    const bio = bioInput.value;
    const avatar = avatarInput.files[0];
    if (!firstName || !lastName || !phone || !group || !email || !bio ) {
        alert('Tous les champs sont obligatoires !');
        return;
        
      }
      const contact = {
        id,
        firstName,
        lastName,
        phone,
        group,
        email,
        bio,
        avatar
      };
      Contacts.push(contact);
      if (idInput.value=='new') {
        addContactToList(contact);
      } else {
        
        editContactToList(contact);
      }
  }
 function editContactToList(contact){
    if (contact.avatar == './avatar.png') {
        avatarElement.src = contact.avatar;
      } else {
        avatarElement.src =  URL.createObjectURL(contact.avatar);
      }

      infoElement.innerHTML = `
      <h4>${contact.firstName} ${contact.lastName}</h4>
      <p>Téléphone: ${contact.phone}</p>
      <p>Groupe: ${contact.group}</p>
      <p>Email: <a href="mailto:${contact.email}?subject=Bonjour%20${contact.firstName}%20${contact.lastName}&body=Bonjour%20${contact.firstName},%0A%0A%0A%0A%0A%0A%0A%0AMes%20meilleures%20salutations%0A%0A${contact.lastName}">${contact.email}</a></p>
      <p>Bio: ${contact.bio}</p>
      `;
}

  // ============Réinitialisation du formulaire=======
  form.reset();
  resetButton.addEventListener('click', () => {
    form.reset();
  });
});

function addContactToList(contact) {
  // ============Création de l'élément HTML pour le nouveau contact=============
  contactElement = document.createElement('div');
  
  contactElement.classList.add('contact');

  //==============Ajout de l'avatar==============
  avatarElement = document.createElement('img');
  if (contact.avatar == './avatar.png') {
    avatarElement.src = contact.avatar;
    
  } else {
    avatarElement.src =  URL.createObjectURL(contact.avatar);
  }
  
  avatarElement.classList.add('avatar');
  contactElement.appendChild(avatarElement);
  infoElement = document.createElement('div');

  // ========Ajout des informations du contact==============
  
  infoElement.classList.add('info');
  infoElement.innerHTML = `
    <h4>${contact.firstName} ${contact.lastName}</h4>
    <p>Téléphone: ${contact.phone}</p>
    <p>Groupe: ${contact.group}</p>
    <p>Email: <a href="mailto:${contact.email}?subject=Bonjour%20${contact.firstName}%20${contact.lastName}&body=Bonjour%20${contact.firstName},%0A%0A%0A%0A%0A%0A%0A%0AMes%20meilleures%20salutations%0A%0A${contact.lastName}">${contact.email}</a></p>
    <p>Bio: ${contact.bio}</p>
    `;
  contactElement.appendChild(infoElement);
  
 
  // =============Ajout du bouton de modification============

  const modifyButton = document.createElement('button');
  modifyButton.innerHTML = '<a class="icon iconnoir " href="#"> <i class="fa-solid fa-user-pen"></i></a>';
  modifyButton.classList.add('modify');
  modifyButton.addEventListener('click', () => {

    bouton1.innerHTML = 'Modifier'
    bouton2.innerHTML = 'Annuler'
    // ===========Récuperer le bouton créer et renit ==============
     bouton1.addEventListener('click', function(){
      
        bouton1.innerHTML = 'Créer'
        bouton2.innerHTML = 'Rénit'
     })
     
    //============== Populate the form with the current contact's information============

    if (contact.avatar == './avatar.png') {
        idInput.value=contact.id;
        firstNameInput.value = contact.firstName;
        lastNameInput.value = contact.lastName;
        phoneInput.value = contact.phone;
        groupSelect.value = contact.group;
        emailInput.value = contact.email;
        bioInput.value = contact.bio;
        avatarInput.value = contact.avatar; 
      } else {
        idInput.value=contact.id;
        firstNameInput.value = contact.firstName;
        lastNameInput.value = contact.lastName;
        phoneInput.value = contact.phone;
        groupSelect.value = contact.group;
        emailInput.value = contact.email;
        bioInput.value = contact.bio;
        avatarInput.value = URL.createObjectURL(contact.avatar);
      }
  });
  contactElement.appendChild(modifyButton);

  // =========Ajout du bouton de suppression=============

      const deleteButton = document.createElement('button');
      const confirmDelete = document.getElementById('button')

      deleteButton.innerHTML = ' <a class="icon iconred " id = "buttonDelete" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-regular fa-trash-can" ></i></a>';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click',() => {
        confirmDelete.innerHTML = `<a class="icon iconred btn btn-danger" href="#">Oui</a>`;
        confirmDelete.addEventListener('click', function(){
          contactList.removeChild(contactElement);
        });

  });

  contactElement.appendChild(deleteButton);
  //=========== Ajout du contact à la liste des contacts=========
  contactList.appendChild(contactElement);
}


avatarInput.addEventListener('dragover', event => {
    const avatar = event.target.files[0];
  
    // ============Vérification de l'extension de l'avatar==========
    if (!avatar.type.match('image.*')) {
      alert('Seules les images sont autorisées !');
      return;
    }
  
    // ===========Mise à jour de l'avatar prévisualisé===========
    const avatarPreview = document.querySelector('.avatar-preview');
    avatarPreview.src = URL.createObjectURL(avatar);
    avatarPreview.classList.remove('hidden');
  });

  // ===========Masquage de la prévisualisation de l'avatar au chargement de la page===========
document.addEventListener('DOMContentLoaded', () => {
    const avatarPreview = document.querySelector('.avatar-preview');
    avatarPreview.src = '';
    avatarPreview.classList.add('hidden');
  });

  
 

 
  

