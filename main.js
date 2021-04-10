var student_array=[];
function Submit()
{
    var t1=document.getElementById("name1").value;
    var t2=document.getElementById("name2").value;
    var t3=document.getElementById("name3").value;
    var t4=document.getElementById("name4").value;
    student_array.push(t1);
    student_array.push(t2);
    student_array.push(t3);
    student_array.push(t4);
  document.getElementById("names").innerHTML=student_array;
  console.log(student_array);
  document.getElementById("submit").style.display="none";
  document.getElementById("sort").style.display="inline-block";
}
function sorting_hat()
{
student_array.sort();
console.log(student_array);

}
