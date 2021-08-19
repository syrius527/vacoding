const libCheck = document.getElementById('liberalcheck');
const libReset = document.getElementById('liberalreset');
const majorCheck = document.getElementById('majorcheck');
const majorReset = document.getElementById('majorreset');
const libForm = document.getElementById('liberal-form');
const majForm = document.getElementById('major-form');
const year = document.getElementById('admissionyear');
const basicInfo = document.getElementById('basicinfo')

function libResult() {
  if (Number(year.value) === 0) {
    basicInfo.scrollIntoView();
    return swal("입학년도를 선택하세요", "", "error");
  }
  else {
    libCal();
  }
}

libCheck.addEventListener("click", libResult);

function majorResult() {
  const cls = document.getElementById('classinfo').value;
  if (Number(year.value) === 0) {
    basicInfo.scrollIntoView();
    return swal("입학년도를 선택하세요", "", "error");
  }
  else if (cls == 0) {
    basicInfo.scrollIntoView();
    return swal("다전공을 선택하세요", "", "error");
  }
  else {
    majorCal();
  }
}

majorCheck.addEventListener("click", majorResult);

function resetor(form) {
  form.reset();
}

libReset.addEventListener("click", function() {
  resetor(libForm);
})
majorReset.addEventListener("click", function() {
  resetor(majForm);
})

 // 교양영역 변수 목록
  const korMin = document.getElementById('kor-min');
  const korCr = document.getElementById('korcred');

  const forMin = document.getElementById('for-min');
  const forCr = document.getElementById('engcred');

  const mathMin = document.getElementById('math-min');
  const mathCr = document.getElementById('mathcred');

  const sciMin = document.getElementById('sci-min');
  const sciCr = document.getElementById('scicred');

  const compMin = document.getElementById('comp-min');
  const compCr = document.getElementById('compcred');

  const coreMin = document.getElementById('core-min');
  const coreCr = document.getElementById('corecred');
  const coreSci = document.getElementById('core-sci');
  const coreFeat = document.getElementById('core-feat');

  const sumMin = document.getElementById('sum-min');
  const sumCr = document.getElementById('sum');
  // 전공영역 변수 목록
  const sngclsMin = document.getElementById('sngcls-min');
  const sngclsCr = document.getElementById('esscls');
  const selclsCr = document.getElementById('selcls');

  const multiclsMin = document.getElementById('multicls-min');
  const multiclsCr = document.getElementById('mulcls');

  const advnclsMin = document.getElementById('advncls-min');
  const advnclsCr = document.getElementById('advcls');

  const totalMin = document.getElementById('mincls');
  const totalCr = document.getElementById('clssum');

function libCal() {
  let result = "입학년도 : " + Number(year.value) + "년\n공통교양\n";

  const core1 = document.getElementById('core1').checked;
  const core2 = document.getElementById('core2').checked;
  const core3 = document.getElementById('core3').checked;
  const core4 = document.getElementById('core4').checked;
  const core5 = document.getElementById('core5').checked;
  const coreArr = [core1, core2, core3, core4, core5];
  let coreCount = 0;

  for (var i = 0; i < coreArr.length; i++) {
    if (coreArr[i]) {
      coreCount++;
    }
  }

  if (Number(korMin.value) > Number(korCr.value)) {
    result += "사고와 표현 : " + [Number(korMin.value) - Number(korCr.value)] + "학점 미달\n";
  }
  else {
    result += "사고와 표현 : 기준 통과\n";
  }

  if (Number(forMin.value) > Number(forCr.value)) {
    result += "외국어 : " + [Number(forMin.value) - Number(forCr.value)] + "학점 미달\n";
  }
  else {
    result += "외국어 : 기준 통과\n";
  }

  if (Number(mathMin.value) > Number(mathCr.value)) {
    result += "수량분석과 추론 : " + [Number(mathMin.value) - Number(mathCr.value)] + "학점 미달\n";
  }
  else {
    result += "수량분석과 추론 : 기준 통과\n";
  }

  if (Number(sciMin.value) > Number(sciCr.value)) {
    result += "과학적사고와 실험 : " + [Number(sciMin.value) - Number(sciCr.value)] + "학점 미달\n";
  }
  else {
    result += "과학적사고와 실험 : 기준 통과\n";
  }

  if (Number(compMin.value) > Number(compCr.value)) {
    result += "컴퓨터와 정보활용 : " + [Number(compMin.value) - Number(compCr.value)] + "학점 미달\n";
  }
  else {
    result += "컴퓨터와 정보활용 : 기준 통과\n";
  }

  if (Number(coreMin.value) > Number(coreCr.value)) {
    result += "학문의 세계 : " + [Number(coreMin.value) - Number(coreCr.value)] + "학점 미달\n";
  }
  else if (coreCount < 2) {
    result += "학문의 세계 : 최소 2영역 이상 이수 요망, 기준 미달\n"
  }
  else {
    result += "학문의 세계 : 기준 통과\n";
  }

  if (Number(sumMin.value) > Number(sumCr.value)) {
    result += "교양영역 합계 : " + [Number(sumMin.value) - Number(sumCr.value)] + "학점 미달\n";
  }
  else {
    result += "교양영역 합계 : 기준 통과\n";
  }

  if (Number(korMin.value) <= Number(korCr.value) && Number(forMin.value) <= Number(forCr.value)
      && Number(mathMin.value) <= Number(mathCr.value) && Number(sciMin.value) <= Number(sciCr.value)
      && Number(compMin.value) <= Number(compCr.value) && Number(coreMin.value) <= Number(coreCr.value)
      && coreCount >= 2 && Number(sumMin.value) <= Number(sumCr.value)) {
    swal("교양영역 결과", result, "success");
  }
  else {
    swal("교양영역 결과",  result, "error");
  }
}

function sumCal() {
  sumCr.value = Number(korCr.value) + Number(forCr.value) + Number(mathCr.value)
   + Number(sciCr.value) + Number(compCr.value) + Number(coreCr.value)
   + Number(coreSci.value) + Number(coreFeat.value);
}

function totalCal() {
  totalCr.value = Number(sngclsCr.value) + Number(selclsCr.value) + Number(multiclsCr.value) + Number(advnclsCr.value);
}

korCr.addEventListener("change", sumCal);
forCr.addEventListener("change", sumCal);
mathCr.addEventListener("change", sumCal);
sciCr.addEventListener("change", sumCal);
compCr.addEventListener("change", sumCal);
coreCr.addEventListener("change", sumCal);
coreSci.addEventListener("change", sumCal);
coreFeat.addEventListener("change", sumCal);
sngclsCr.addEventListener("change", totalCal);
selclsCr.addEventListener("change", totalCal);
multiclsCr.addEventListener("change", totalCal);
advnclsCr.addEventListener("change", totalCal);

function majorCal() {
  const multCls = document.getElementById('multicls').checked;
  const advnCls = document.getElementById('advncls').checked;

  let result = "입학년도 : " + Number(year.value) + "년도\n";
  if (Number(sngclsMin.value) > Number(sngclsCr.value) + Number(selclsCr.value)) {
    result += "단일전공 : " + [Number(sngclsMin.value) - Number(sngclsCr.value) - Number(selclsCr.value)] + "학점 미달\n";
  }
  else {
    result += "단일전공 : 기준 통과";
  }

  if (multCls) {
    if (Number(multiclsMin.value) > Number(multiclsCr.value)) {
      result += "복수전공 : " + [Number(multiclsMin.value) - Number(multiclsCr.value)] + "학점 미달\n";
    }
    else {
      result += "복수전공 : 최소학점 기준 통과_세부기준 확인요망\n";
    }
  }

  if (advnCls) {
    if (Number(advnclsMin.value) > Number(advnclsCr.value)) {
      result += "심화전공 : " + [Number(advnclsMin.value) - Number(advnclsCr.value)] + "학점 미달\n";
    }
    else {
      result += "심화전공 : 최소학점 기준 통과_세부기준 확인요망\n";
    }
  }

  swal("전공영역 결과", result, "success");
}

function colorChange(min, credit) {
  if (Number(min.value) > Number(credit.value)) {
    credit.style.color = "red";
  }
  else {
    credit.style.color = "blue";
  }
}

korCr.addEventListener("change", function() {
  colorChange(korMin, korCr)
});
forCr.addEventListener("change", function() {
  colorChange(forMin, forCr)
});
mathCr.addEventListener("change", function() {
  colorChange(mathMin, mathCr)
});
sciCr.addEventListener("change", function() {
  colorChange(sciMin, sciCr)
});
compCr.addEventListener("change", function() {
  colorChange(compMin, compCr)
});
coreCr.addEventListener("change", function() {
  colorChange(coreMin, coreCr)
});

korCr.addEventListener("change", function() {
  colorChange(sumMin, sumCr)
});
forCr.addEventListener("change", function() {
  colorChange(sumMin, sumCr)
});
mathCr.addEventListener("change", function() {
  colorChange(sumMin, sumCr)
});
sciCr.addEventListener("change", function() {
  colorChange(sumMin, sumCr)
});
compCr.addEventListener("change", function() {
  colorChange(sumMin, sumCr)
});
coreCr.addEventListener("change", function() {
  colorChange(sumMin, sumCr)
});

sngclsCr.addEventListener("change", function() {
  colorChange(sngclsMin, sngclsCr)
});
selclsCr.addEventListener("change", function() {
  colorChange(selclsMin, selclsCr)
});
multiclsCr.addEventListener("change", function() {
  colorChange(multiclsMin, multiclsCr)
});
advnclsCr.addEventListener("change", function() {
  colorChange(advnclsMin, advnclsCr)
});

sngclsCr.addEventListener("change", function() {
  colorChange(totalMin, totalCr)
});
selclsCr.addEventListener("change", function() {
  colorChange(totalMin, totalCr)
});
multiclsCr.addEventListener("change", function() {
  colorChange(totalMin, totalCr)
});
advnclsCr.addEventListener("change", function() {
  colorChange(totalMin, totalCr)
});

const aboutBtn = document.getElementById("about");
function aboutInfo() {
  swal("개발자 정보", "Code by Syrius\nE-mail : djlee1031@snu.ac.kr", "info");
}
aboutBtn.addEventListener("click", aboutInfo)
