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
    content.innerHTML = 'Fusion 360 has been my go to CAD software package for home use. This is becuase it is free for home use and also having a MAC for home use (yes i have a mac because the m1 chip is just so much better than anything windows has to offer...)';
  } else if (index === 5) {
    image.src = 'images/skills/geomagic.png';
    title.textContent = 'Design X';
    content.innerHTML = 'Used Geomagic design X to reverse engineer scanned components to produce parametric models.......';
  } else if (index === 6) {
    image.src = 'images/skills/ansys.png';
    title.textContent = 'ANSYS';
    content.innerHTML = 'Nothing beat verifying informaation first with free body diagrams and simple calculations but if you want more accuracy then FEA is the next best thing after real world testing. Used Ansys at university, trainined in Instran and have used Solidworks Static FEA';
  } else if (index === 7) {
    image.src = 'images/skills/webdev.png';
    title.textContent = 'Webdev';
    content.innerHTML = 'Something about apps and the softwaare i know. HTML CSS JS. Including this website is programmed entired by myself and all self taught';
  } else if (index === 8) {
    image.src = 'images/skills/python.svg';
    title.textContent = 'Python';
    content.innerHTML = 'Used Python and Micro Python. Projects included development of a webapp that used FLASK which allows the users to control a LED to have a competition in red vs blue counts. uPython on testing devices. Python for data analysis and calculations.';
  } else if (index === 9) {
    image.src = 'images/skills/raspberry.png';
    title.textContent = 'Electronics';
    content.innerHTML = 'Worked on electronics projects both in work at pfizer and personal. *summary of the projects talked about EvoSense*';
  } else if (index === 10) {
    image.src = 'images/skills/excel.png';
    title.textContent = 'Excel';
    content.innerHTML = 'Monte carlo simulations for plunger positions, dose delivery, battery life expectancies etc';
  } else if (index === 11) {
    image.src = 'images/skills/instron.png';
    title.textContent = 'Testing and verifications';
    content.innerHTML = 'Testing, verifications and designined of jig and fixtures for design verification testing. Includes things with force and displacement sensors. Worked on projects which require..........';
  } else if (index === 12) {
    image.src = 'images/skills/stats.png';
    title.textContent = 'Statistical Analysis';
    content.innerHTML = 'Analysis of data sets to make informaed decisions and trends. used python scripts, excel to do something still patient kin info';
  } else if (index === 13) {
      image.src = 'images/skills/report.png';
      title.textContent = 'Reports, Manuals, SOPs';
      content.innerHTML = '*Talk about what was required at pfizer doing reports, Signage engineering manual for signage design before I left and SOPs for processes at pfizer and setting up templates for previous roles for quoting and job/print organization.*';
  } else if (index === 14) {
    image.src = 'images/skills/3dprint.png';
    title.textContent = '3D Printing';
    content.innerHTML = 'have worked for 2? years in 3d printing as the production manager. expert in 3d printing. have built FDM machines, worked with SLA and SLS machines';
  } else if (index === 15) {
    image.src = 'images/skills/3dscan.svg';
    title.textContent = '3D Scanning';
    content.innerHTML = 'Used 3D scanning to reverse engineer components at LEP Engineering platics. utalized Geomagic Design X to turn STL/point cloud files into working paratetric files';
  } else if (index === 16) {
    image.src = 'images/skills/office.png';
    title.textContent = 'office';
    content.innerHTML = 'Have been bought up on the windows eco system and very familiar with the MS suite..';
  } else if (index === 17) {
    image.src = 'images/skills/medical.png';
    title.textContent = 'Medical Devices';
    content.innerHTML = 'Something about medical device experience. ISO standards. Processes. Desing controls. Risk Analysis. ';
  } else if (index === 18) {
    image.src = 'images/skills/signage.png';
    title.textContent = 'Signage';
    content.innerHTML = 'Something about signage experience.';
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

