const required={"인성체험교양":5,"기초교양-외국어역량":6,"기초교양-글쓰기/독서와토론":6,"기초교양-소프트웨어":2,"인성체험/균형교양":21};
const students=[
{id:"2021001",name:"김민수",credits:{"인성체험교양":5,"기초교양-외국어역량":6,"기초교양-글쓰기/독서와토론":6,"기초교양-소프트웨어":2,"인성체험/균형교양":21}},
{id:"2021010",name:"박서준",credits:{"인성체험교양":5,"기초교양-외국어역량":6,"기초교양-글쓰기/독서와토론":3,"기초교양-소프트웨어":2,"인성체험/균형교양":24}}
];
const select=document.getElementById("studentSelect");
students.forEach(s=>{const o=document.createElement("option");o.value=s.id;o.textContent=`${s.id} - ${s.name}`;select.appendChild(o);});
function updateStudent(id){
const student=students.find(s=>s.id===id);
const tableBody=document.getElementById("tableBody");
tableBody.innerHTML="";
let pass=true;
Object.keys(required).forEach(key=>{
const need=required[key],earned=student.credits[key],lack=Math.max(need-earned,0);
if(lack>0) pass=false;
tableBody.innerHTML+=`<tr><td>${key}</td><td>${need}</td><td>${earned}</td><td>${lack}</td><td>${lack===0?"충족":"미달"}</td></tr>`;
});
document.getElementById("result").innerHTML=pass?"✅ 졸업 가능":"❌ 졸업 불가";
}
select.addEventListener("change",e=>updateStudent(e.target.value));
updateStudent("2021001");