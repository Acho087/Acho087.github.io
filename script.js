const modal = document.getElementById('modal');
const close = document.getElementById('closeModal');
const image = modal.querySelector('img');
const title = modal.querySelector('h2');
const content = modal.querySelector('p');
let isHidden = true;

function openModal(index) {
  // Set the image source, title, and content based on the index
  const imgg = document.getElementById(`openModal${index}`);

  if (index === 1) {
    image.src = 'images/skills/solidworks.png';
    
    title.textContent = 'SolidWorks';
    content.innerHTML = 'SolidWorks is a powerful 3D computer-aided design (CAD) software that engineers swear by for designing and modeling complex mechanical and industrial systems. Its a game-changer, streamlining the product development process and boosting engineering efficiency. <br> <br>In my journey spanning over four years, Ive had the privilege of diving deep into SolidWorks while working at Pfizer, LEP Engineering Plastics, and MAG Assembly. These experiences have allowed me to hone my skills in 3D CAD modeling and engineering design across a range of industries. SolidWorks has become my trusted companion, empowering me to deliver exceptional results and contribute to the success of various projects. ';
  } else if (index === 2) {
    image.src = 'images/skills/PTC.png';
    title.textContent = 'PTC Creo';
    content.innerHTML = 'I have accumulated extensive skills and hands-on experience in utilizing Creo, formerly known as Wildfire, the versatile CAD software. During my four-year tenure in university, I delved into Creo, mastering its functionalities and applying it to various projects. At Anglo Engineering, I dedicated a substantial amount of time designing sheet metal, fabrication assemblies, and components using Creo. Additionally, at Pfizer, I had the opportunity to work with Creo intermittently, producing compliant drawings. My proficiency in Creo, honed through practical application and diverse experiences, showcases my ability to effectively leverage this CAD software.';
  } else if (index === 3) {
    image.src = 'images/skills/inventor.png';
    title.textContent = 'Inventor';
    content.innerHTML = 'During my time at Rapiscan Systems, I gained valuable experience with Autodesk Inventor, a robust CAD application for 3D mechanical design, simulation, visualization, and documentation. Within a span of six months, I became proficient in utilizing the software and seamlessly integrated it with Vault, enhancing my ability to manage design files efficiently. Moreover, my expertise with Autodesk Inventor extended beyond standard usage, as I developed custom macros to assist other engineers. Notably, I created a macro that streamlined the export process, automating the generation of STEP, STL, and DWG files. Additionally, I designed a macro that simplified the reformatting of drawing sheets to a new template with a single click. These macros significantly improved team productivity and demonstrated my dedication to optimizing CAD workflows.';
  } else if (index === 4) {
    image.src = 'images/skills/fusion.png';
    title.textContent = 'Fusion 360';
    content.innerHTML = 'Creo something something...';
  } else if (index === 5) {
    image.src = 'images/skills/geomagic.png';
    title.textContent = 'GeoMagic Design';
    content.innerHTML = 'Creo something something...';
  } else if (index === 6) {
    image.src = 'images/skills/ansys.png';
    title.textContent = 'ANSYS';
    content.innerHTML = 'Creo something something...';
  } else if (index === 7) {
    image.src = 'images/skills/office.png';
    title.textContent = 'MS Suite';
    content.innerHTML = 'Creo something something...';
  } else if (index === 8) {
    image.src = 'images/skills/python.svg';
    title.textContent = 'Python';
    content.innerHTML = 'Creo something something...';
  } else if (index === 9) {
    image.src = 'images/skills/raspberry.png';
    title.textContent = 'Electronics';
    content.innerHTML = 'Creo something something...';
  } else if (index === 10) {
    image.src = 'images/skills/excel.png';
    title.textContent = 'Excel';
    content.innerHTML = 'Creo something something...';
  } else if (index === 11) {
    image.src = 'images/skills/medical.png';
    title.textContent = 'Medical Devices';
    content.innerHTML = 'Creo something something...';
  } else if (index === 12) {
    image.src = 'images/skills/signage.png';
    title.textContent = 'Signage';
    content.innerHTML = 'Creo something something...';
  } else if (index === 13) {
      image.src = 'images/skills/report.png';
      title.textContent = 'Reports, Manuals, SOPs';
      content.innerHTML = 'Creo something something...';
  } else if (index === 14) {
    image.src = 'images/skills/3dprint.png';
    title.textContent = '3D Printing';
    content.innerHTML = 'Creo something something...';
  } else if (index === 15) {
    image.src = 'images/skills/3dscan.svg';
    title.textContent = '3D Scanning';
    content.innerHTML = 'Creo something something...';
  } else if (index === 16) {
    image.src = 'images/skills/webdev.png';
    title.textContent = 'WebDev';
    content.innerHTML = 'Creo something something...';
  } else if (index === 17) {
    image.src = 'images/skills/stats.png';
    title.textContent = 'PDM Systems Vault and DDM';
    content.innerHTML = 'Creo something something...';
  } else if (index === 18) {
    image.src = 'images/skills/instron.png';
    title.textContent = 'PDM Systems Vault and DDM';
    content.innerHTML = 'Creo something something...';
}
  modal.showModal()
}


// Close the modal when clicking outside of it
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.close();
  }
});

modal.addEventListener("click", function(event) {
  if (event.target === close) {
    modal.close();
  }
});

