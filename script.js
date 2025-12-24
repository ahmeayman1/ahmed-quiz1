const questions = [
  {q:"Normal pregnancy development includes five processes that result in five compositions.", a:true},
  {q:"The five processes are fertilization, cleavage, implantation, embryogenesis, and organogenesis.", a:true},
  {q:"The five resulting compositions include placenta, umbilical cord, fetal membranes, amniotic fluid, and fetus.", a:true},
  {q:"Fertilization normally occurs at the outer third of the fallopian tube.", a:true},
  {q:"Capacitation and acrosome reaction are necessary for fertilization.", a:true},
  {q:"The acrosome reaction releases enzymes such as hyaluronidase.", a:true},
  {q:"Cleavage occurs as 2 → 4 → 8 → 16 cells reaching the morula stage.", a:true},
  {q:"The morula changes into a blastocyst which implants in the uterus.", a:true},
  {q:"The morula remains in the fallopian tube for about 4 days then 3 days in the uterus.", a:true},
  {q:"Implantation normally occurs in the lower uterine segment.", a:false},
  {q:"Implantation most often occurs on the posterior wall of the upper uterine segment.", a:true},
  {q:"The trophoblast contributes to placenta formation and the inner cell mass becomes the fetus.", a:true},
  {q:"A full-term placenta is composed of the chorion frondosum and the decidua basalis.", a:true},
  {q:"At term, the placenta typically weighs about 500 grams and has a central thickness of around 2.5 cm.", a:true},
  {q:"Typical placental diameter at term is about 15–20 cm.", a:true},
  {q:"The umbilical cord always attaches at the edge of the placenta.", a:false},
  {q:"The fetal surface of the placenta is smooth and glistening because it is covered by amnion; the maternal surface is rough and formed of cotyledons.", a:true},
  {q:"The placenta functions only for nutrition.", a:false},
  {q:"The placenta exchanges gases, transporting carbon dioxide from fetus to mother and oxygen from mother to fetus.", a:true},
  {q:"The placenta can excrete fetal waste products like urea into the maternal circulation.", a:true},
  {q:"The placenta secretes hormones including HCG, HPL, progesterone and estrogen.", a:true},
  {q:"The placenta produces enzymes such as insulinase, oxytocinase, and monoamine oxidase.", a:true},
  {q:"The placenta is a complete barrier to all infectious organisms.", a:false},
  {q:"STORCH infections and HIV can cross the placenta.", a:true},
  {q:"The placenta plays an immunological role to help prevent rejection of the fetus.", a:true},
  {q:"A placenta membranacea is thin and mostly membrane tissue.", a:true},
  {q:"A placenta fenestrata has small window-gaps and is composed only of membrane.", a:true},
  {q:"A circumvallate placenta has an enlarged chorion frondosum that decreases risk of hemorrhage.", a:false},
  {q:"A bilobate placenta has two adjacent lobes equal in size and without separation.", a:true},
  {q:"A bipartite placenta consists of two lobes that are equal in size and are separated.", a:true},
  {q:"A succenturiate lobe is an accessory placental lobe that is unequal in size and separated.", a:true},
  {q:"A positive circular gap in the fetal membranes postpartum suggests a succenturiate lobe was present.", a:true},
  {q:"Placenta accreta refers to placental invasion that reaches the myometrium, increta and percreta are deeper invasions.", a:true},
  {q:"Implantation of the placenta in the lower uterine segment is called placenta previa.", a:true},
  {q:"Increased placental weight and size can be associated with diabetes mellitus, hydrops fetalis, and multiple pregnancies.", a:true},
  {q:"A decrease in placental size is commonly seen with IUGR.", a:true},
  {q:"Membranous (vellamentous) and marginal (battledore) cord insertions are normal variants with no clinical implications.", a:false},
  {q:"Placental tumors can include hemangioma and chorioangioma.", a:true},
  {q:"White infarctions of the placenta are physiological; red infarctions may be pathological.", a:true},
  {q:"A normal umbilical cord contains amnion, Wharton's jelly, one umbilical vein, and two arteries.", a:true},
  {q:"A typical umbilical cord length is about 50 cm and diameter about 1–2 cm.", a:true},
  {q:"Abnormal cord insertion types include velamentous and battledore insertions.", a:true},
  {q:"Abnormal cord length can lead to cord prolapse, true knots, or prolonged labor.", a:true},
  {q:"A false knot is a localized collection of Wharton's jelly.", a:true},
  {q:"Cord torsion, cord hemangioma, and a single umbilical artery are abnormalities.", a:true},
  {q:"The chorion is the outer fetal membrane and covers placenta and cord; the amnion is inner.", a:false},
  {q:"The chorion is less transparent and stops at the edge of the placenta; the amnion covers placenta and cord.", a:true},
  {q:"Most accepted origins of amniotic fluid are fetal.", a:true},
  {q:"Maternal transudation is the most accepted origin of amniotic fluid.", a:false},
  {q:"Normal amniotic fluid at term is clear, alkaline, 0.5–1.5 liters.", a:true},
  {q:"Amniotic fluid composition is approximately 98–99% water.", a:true},
  {q:"Amniotic fluid functions include protection, movement, antisepsis, temperature, urine medium, and labor aid.", a:true},
  {q:"Polyhydramnios denotes decreased amniotic fluid.", a:false},
  {q:"Oligohydramnios refers to less than 500 mL of fluid.", a:true},
  {q:"Anhydramnios means no amniotic fluid at all.", a:true},
  {q:"At full term typical fetal weight is 3–3.5 kg, length 50 cm, head circumference 35 cm.", a:true},
  {q:"Full-term fetus is typically covered in lanugo hair with nails not reaching fingertips.", a:false},
  {q:"Vernix caseosa is a sebaceous secretion covering the fetus.", a:true}
];

let index=0;
let answered=false;
let results=[];

const qText=document.getElementById("questionText");
const counter=document.getElementById("counter");
const trueBtn=document.getElementById("trueBtn");
const falseBtn=document.getElementById("falseBtn");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

function startQuiz(){
  shuffle();
  index=0;
  results=Array(questions.length).fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  document.querySelector(".options").style.display="flex";
  document.getElementById("questionsBtn").style.display="block";
  retryBtn.style.display="none";
  loadQuestion();
}

function loadQuestion(){
  answered=false;
  trueBtn.style.background="#3498db";
  falseBtn.style.background="#3498db";
  nextBtn.style.display="none";
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  qText.innerText=questions[index].q;
}

function answer(val){
  if(answered) return;
  answered=true;
  const correct=questions[index].a;
  results[index]=(val===correct);

  if(val===correct){
    (val?trueBtn:falseBtn).style.background="#27ae60";
  }else{
    (val?trueBtn:falseBtn).style.background="#e74c3c";
    (correct?trueBtn:falseBtn).style.background="#27ae60";
  }

  if(results.every(r=>r!==null)){
    finishQuiz();
  }else{
    nextBtn.style.display="inline-block";
  }
}

function nextQuestion(){
  index = results.findIndex((r,i)=>r===null && i>index);
  if(index===-1){
    index = results.findIndex(r=>r===null);
  }
  loadQuestion();
}

function finishQuiz(){
  qText.innerText=`✅ Finished — Score: ${results.filter(r=>r).length} / ${questions.length}`;
  document.querySelector(".options").style.display="none";
  document.getElementById("questionsBtn").style.display="none";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  startQuiz();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";
  results.forEach((r,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(r===true?"correct":r===false?"wrong":"unanswered");
    d.innerText=i+1;
    d.onclick=()=>{
      index=i;
      loadQuestion();
      qList.style.display="none";
    };
    qList.appendChild(d);
  });
}

function shuffle(){
  questions.sort(()=>Math.random()-0.5);
}