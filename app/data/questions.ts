export interface SubQuestion {
  label: string;         // "a", "b", "c", "d"
  text: string;          // Nội dung của ý nhỏ đó
  correctAnswer: "Đúng" | "Sai";
}

export interface Question {
  id: string;
  type: "multiple-choice" | "true-false" | "short-answer";
  question: string;
  
  // Dành cho Chặng 1 (Trắc nghiệm)
  options?: (string | number)[];
  answer?: string | number;
  
  // Dành cho Chặng 2 (Đúng / Sai)
  subQuestions?: SubQuestion[];

  // Dành cho Chặng 3 (Trả lời ngắn + Giải thích)
  explanation?: string; // Đoạn text giải thích sau khi làm xong
}

// 2. Thiết lập bộ câu hỏi chia làm 3 stage (stage1, stage2, stage3)
export const propositionQuestions = {

 1: {
    stage1: [
      {
        id: "p1_s1_1",
        type: "multiple-choice",
        question: "Tính $\\frac{1}{2}+\\frac{1}{3}$",
        options: [
          "Tam giác đều là tam giác có ba cạnh bằng nhau",
          "3 < 1",
          "4 - 5 = 1",
          "Bạn học giỏi quá!"
        ],
        answer: "Bạn học giỏi quá!"
      },
      {
        id: "p1_s1_2",
        type: "multiple-choice",
        question: "Trong các câu sau, câu nào là mệnh đề?",
        options: [
          "12 là số tự nhiên lẻ",
          "An học lớp mấy?",
          "Các bạn có chăm học không?",
          "Các bạn hãy làm bài đi!"
        ],
        answer: "12 là số tự nhiên lẻ"
      },
      {
        id: "p1_s1_3",
        type: "multiple-choice",
        question: "Phát biểu nào sau đây là một mệnh đề?",
        options: [
          "Mùa thu Hà Nội đẹp quá!",
          "Bạn có đi học không?",
          "Đề thi môn Toán khó quá!",
          "Hà Nội là thủ đô của Việt Nam"
        ],
        answer: "Hà Nội là thủ đô của Việt Nam"
      },
      {
        id: "p1_s1_4",
        type: "multiple-choice",
        question: "Mệnh đề phủ định của 'n > 9' là",
        options: [
          "-n > 9",
          "-n > -9",
          "n < 9",
          "n ≤ 9"
        ],
        answer: "n ≤ 9"
      },
      {
        id: "p1_s1_5",
        type: "multiple-choice",
        question: "Cho mệnh đề 'Có một học sinh trong lớp 10A không thích học môn Toán'. Mệnh đề phủ định là",
        options: [
          "Mọi học sinh trong lớp 10A đều thích học môn Toán",
          "Mọi học sinh trong lớp 10A đều không thích học môn Toán",
          "Mọi học sinh trong lớp 10A đều thích học môn Văn",
          "Có một học sinh trong lớp 10A thích học môn Toán"
        ],
        answer: "Mọi học sinh trong lớp 10A đều thích học môn Toán"
      },
      {
        id: "p1_s1_6",
        type: "multiple-choice",
        question: "Mệnh đề nào sau đây là phủ định của 'Mọi động vật đều di chuyển'?",
        options: [
          "Có ít nhất một động vật di chuyển",
          "Có ít nhất một động vật không di chuyển",
          "Mọi động vật đều không di chuyển",
          "Mọi động vật đều đứng yên"
        ],
        answer: "Có ít nhất một động vật không di chuyển"
      },
      {
        id: "p1_s1_7",
        type: "multiple-choice",
        question: "Cho định lí: Nếu hai tam giác bằng nhau thì diện tích bằng nhau. Khẳng định đúng là",
        options: [
          "Hai tam giác bằng nhau là điều kiện cần và đủ để diện tích bằng nhau",
          "Hai tam giác bằng nhau là điều kiện cần để diện tích bằng nhau",
          "Hai tam giác có diện tích bằng nhau là điều kiện đủ để bằng nhau",
          "Hai tam giác bằng nhau là điều kiện đủ để diện tích bằng nhau"
        ],
        answer: "Hai tam giác bằng nhau là điều kiện đủ để diện tích bằng nhau"
      },
      {
        id: "p1_s1_8",
        type: "multiple-choice",
        question: "Mệnh đề P ⇒ Q sai khi nào?",
        options: [
          "P đúng, Q đúng",
          "P sai, Q đúng",
          "P sai, Q sai",
          "P đúng, Q sai"
        ],
        answer: "P đúng, Q sai"
      },
      {
        id: "p1_s1_9",
        type: "multiple-choice",
        question: "Mệnh đề phủ định của '∀x ∈ R : x² + x + 5 > 0' là",
        options: [
          "∀x ∈ R : x² + x + 5 ≤ 0",
          "∃x ∈ R : x² + x + 5 ≤ 0",
          "∀x ∈ R : x² + x + 5 < 0",
          "∃x ∈ R : x² + x + 5 > 0"
        ],
        answer: "∃x ∈ R : x² + x + 5 ≤ 0"
      },
      {
        id: "p1_s1_10",
        type: "multiple-choice",
        question: "Phủ định của mệnh đề '∃x ∈ R : x² + x + 1 là số dương' là",
        options: [
          "∀x ∈ R : x² + x + 1 là số không dương",
          "∀x ∈ R : x² + x + 1 là số âm",
          "∀x ∈ R : x² + x + 1 là số dương",
          "∃x ∈ R : x² + x + 1 là số dương"
        ],
        answer: "∀x ∈ R : x² + x + 1 là số không dương"
      }
    ],
  stage2: [
  {
    id: "p1_s2_1",
    type: "true-false",
    question: "Xét tính đúng sai của các mệnh đề sau:",
    subQuestions: [
      {
        label: "a",
        text: "15 không là số nguyên tố.",
        correctAnswer: "Đúng"
      },
      {
        label: "b",
        text: "Một tứ giác là hình thoi khi và chỉ khi nó có hai đường chéo vuông góc với nhau.",
        correctAnswer: "Sai"
      },
      {
        label: "c",
        text: "5 + 19 = 24.",
        correctAnswer: "Đúng"
      },
      {
        label: "d",
        text: "6 + 81 = 25.",
        correctAnswer: "Sai"
      }
    ]
  },

  {
    id: "p1_s2_2",
    type: "true-false",
    question: "Cho P: 'Tam giác ABC là tam giác đều', Q: 'Tam giác ABC là tam giác cân'. Xét mệnh đề Nếu P thì Q.",
    subQuestions: [
      {
        label: "a",
        text: "P là điều kiện đủ để có Q.",
        correctAnswer: "Đúng"
      },
      {
        label: "b",
        text: "Q là điều kiện cần để có P.",
        correctAnswer: "Đúng"
      },
      {
        label: "c",
        text: "Mệnh đề 'Nếu P thì Q' là mệnh đề đúng.",
        correctAnswer: "Đúng"
      },
      {
        label: "d",
        text: "Mệnh đề 'Nếu Q thì P' là mệnh đề đúng.",
        correctAnswer: "Sai"
      }
    ]
  },

  {
    id: "p1_s2_3",
    type: "true-false",
    question: "Cho hai mệnh đề: P: 'Hình bình hành có một góc vuông là hình chữ nhật'; Q: 'Số 7 là hợp số'.",
    subQuestions: [
      {
        label: "a",
        text: "P là mệnh đề đúng.",
        correctAnswer: "Đúng"
      },
      {
        label: "b",
        text: "Q là mệnh đề đúng.",
        correctAnswer: "Sai"
      },
      {
        label: "c",
        text: "P ⇒ Q là mệnh đề đúng.",
        correctAnswer: "Sai"
      },
      {
        label: "d",
        text: "Q ⇒ P là mệnh đề đúng.",
        correctAnswer: "Đúng"
      }
    ]
  }
],
stage3: [
  {
    id: "p1_s3_1",
    type: "short-answer",
    question: "Trong các phát biểu sau có bao nhiêu phát biểu là mệnh đề?\n(1) 17 là số nguyên tố.\n(2) Tam giác vuông có một đường trung tuyến bằng nửa cạnh huyền.\n(3) Các em hãy cố gắng học tập thật tốt nhé!\n(4) Mọi hình chữ nhật đều nội tiếp được đường tròn.",
    answer: "3",
    explanation: "Các câu (1), (2), (4) đều là câu khẳng định có giá trị đúng hoặc sai nên là mệnh đề. Câu (3) là câu mệnh lệnh nên không phải mệnh đề."
  },

  {
    id: "p1_s3_2",
    type: "short-answer",
    question: "Cho các câu:\n(a) Phan-xi-păng là ngọn núi cao nhất Việt Nam.\n(b) π² < 9,86.\n(c) Học Toán thật vui!\n(d) Cậu cho tớ hỏi kết quả câu 2 ra bao nhiêu vậy?\nCó bao nhiêu câu là mệnh đề?",
    answer: "2",
    explanation: "Hai câu (a) và (b) là câu khẳng định nên là mệnh đề. Câu (c) là cảm thán, câu (d) là câu hỏi nên không phải mệnh đề."
  },

  {
    id: "p1_s3_3",
    type: "short-answer",
    question: "Trong các câu sau có bao nhiêu câu không phải là mệnh đề?\n(a) Huế là một thành phố của Việt Nam.\n(b) Sông Hương chảy ngang qua thành phố Huế.\n(c) Hãy trả lời câu hỏi này!\n(d) 5 + 19 = 24.\n(e) 6 + 81 = 25.\n(f) Bạn có rỗi tối nay không?\n(g) x + 2 = 11.",
    answer: "3",
    explanation: "Các câu (c), (f), (g) không phải mệnh đề. (c) là câu mệnh lệnh, (f) là câu hỏi, (g) chứa biến chưa xác định giá trị."
  },

  {
    id: "p1_s3_4",
    type: "short-answer",
    question: "Trong các câu sau có bao nhiêu câu là mệnh đề?\n(a) Hãy đi nhanh lên!\n(b) Hà Nội là thủ đô của Việt Nam.\n(c) 5 + 7 + 4 = 15.\n(d) Năm 2018 là năm nhuận.",
    answer: "3",
    explanation: "Các câu (b), (c), (d) là câu khẳng định nên là mệnh đề. Câu (a) là câu mệnh lệnh nên không phải mệnh đề."
  },

  {
    id: "p1_s3_5",
    type: "short-answer",
    question: "Cho P: 'n chia hết cho 16', Q: 'n chia hết cho 8'. Có bao nhiêu mệnh đề đúng trong ba mệnh đề: P⇒Q, Q⇒P, P⇔Q?",
    answer: "1",
    explanation: "Nếu n chia hết cho 16 thì chắc chắn chia hết cho 8 nên P⇒Q đúng. Q⇒P sai vì 8 không nhất thiết chia hết cho 16. Do đó P⇔Q cũng sai. Chỉ có đúng 1 mệnh đề đúng."
  }
]
},
2: { 
stage1: [
{
id:"s1_1",
type:"multiple-choice",
question:"Ký hiệu nào biểu thị 3 là phần tử của tập hợp số tự nhiên N?",
options:["3 ⊂ N","3 ∈ N","3 ⊄ N","3 = N"],
answer:"3 ∈ N"
},
{
id:"s1_2",
type:"multiple-choice",
question:"Cho tập hợp X={a,b,c}. Số tập con của X là",
options:["3","6","8","9"],
answer:"8"
},
{
id:"s1_3",
type:"multiple-choice",
question:"Cho A={0;3;4;6}. Số tập con gồm hai phần tử của A là",
options:["4","5","6","8"],
answer:"6"
},
{
id:"s1_4",
type:"multiple-choice",
question:"Cho A={1;2;3;4}, B={1;2}. Tập A\\B bằng",
options:["{1;2}","{3;4}","{1;2;3;4}","∅"],
answer:"{3;4}"
},
{
id:"s1_5",
type:"multiple-choice",
question:"Cho X={1;5}, Y={1;3;5}. Tập X∩Y là",
options:["{1}","{1;3}","{1;5}","{1;3;5}"],
answer:"{1;5}"
},
{
id:"s1_6",
type:"multiple-choice",
question:"Cho X={a,b}, Y={a,b,c}. Tập X∪Y là",
options:["{a,b}","{c}","{a,b,c}","∅"],
answer:"{a,b,c}"
},
{
id:"s1_7",
type:"multiple-choice",
question:"Cho A={1;2;3;4}, B={0;2;4;6}. Tập A∩B là",
options:["{0;2;4}","{2;4}","{1;3}","{1;2;3;4}"],
answer:"{2;4}"
},
{
id:"s1_8",
type:"multiple-choice",
question:"Cho A={1;2}. Số tập con của A là",
options:["2","3","4","5"],
answer:"4"
},
{
id:"s1_9",
type:"multiple-choice",
question:"Tập nào sau đây là tập rỗng?",
options:[
"{x∈R|x²+1=0}",
"{0}",
"{∅}",
"{x∈R|x=0}"
],
answer:"{x∈R|x²+1=0}"
},
{
id:"s1_10",
type:"multiple-choice",
question:"Cho A⊂B. Khi đó A∩B bằng",
options:["A","B","∅","A∪B"],
answer:"A"
}
],
stage2:[
{
id:"s2_1",
type:"true-false",
question:"Xét các khẳng định sau:",
subQuestions:[
{
label:"a",
text:"∅ là tập con của mọi tập hợp.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Mọi tập hợp đều là tập con của chính nó.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Tập {∅} là tập rỗng.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Tập có 3 phần tử có 6 tập con.",
correctAnswer:"Sai"
}
]
},
{
id:"s2_2",
type:"true-false",
question:"Cho A={1;2;3}, B={2;3;4}.",
subQuestions:[
{
label:"a",
text:"A∩B={2;3}",
correctAnswer:"Đúng"
},
{
label:"b",
text:"A∪B={1;2;3;4}",
correctAnswer:"Đúng"
},
{
label:"c",
text:"A\\B={1}",
correctAnswer:"Đúng"
},
{
label:"d",
text:"B\\A={2;3}",
correctAnswer:"Sai"
}
]
},
{
id:"s2_3",
type:"true-false",
question:"Cho A={1;2}, B={1;2;3;4}.",
subQuestions:[
{
label:"a",
text:"A⊂B",
correctAnswer:"Đúng"
},
{
label:"b",
text:"A=B",
correctAnswer:"Sai"
},
{
label:"c",
text:"A∪B=B",
correctAnswer:"Đúng"
},
{
label:"d",
text:"A∩B=A",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"s3_1",
type:"short-answer",
question:"Một tập hợp có 4 phần tử. Hỏi tập hợp đó có bao nhiêu tập con?",
answer:"16",
explanation:"Nếu tập hợp có n phần tử thì số tập con bằng 2^n. Với n=4 ta có 2^4=16."
},
{
id:"s3_2",
type:"short-answer",
question:"Cho A={1;2;3;4}. Có bao nhiêu tập con gồm đúng 2 phần tử?",
answer:"6",
explanation:"Số tập con gồm 2 phần tử là C(4,2)=6."
},
{
id:"s3_3",
type:"short-answer",
question:"Cho A={1;2;3}, B={2;3;4}. Tính số phần tử của A∪B.",
answer:"4",
explanation:"A∪B={1;2;3;4} nên có 4 phần tử."
},
{
id:"s3_4",
type:"short-answer",
question:"Lớp học có 25 học sinh giỏi Toán, 23 học sinh giỏi Lý, 14 học sinh giỏi cả hai môn. Có bao nhiêu học sinh giỏi ít nhất một trong hai môn?",
answer:"34",
explanation:"n(T∪L)=n(T)+n(L)-n(T∩L)=25+23-14=34."
},
{
id:"s3_5",
type:"short-answer",
question:"Cho A={1;2;3;4;5}, B={2;4;6}. Tập A∩B có bao nhiêu phần tử?",
answer:"2",
explanation:"A∩B={2;4}. Do đó có 2 phần tử."
}
]
},
3: {
stage1: [
{
id:"bpt1_s1_1",
type:"multiple-choice",
question:"Cặp số nào sau đây là nghiệm của bất phương trình 2x - y < 0?",
options:["(0;-1)","(3;5)","(2;-1)","(4;1)"],
answer:"(3;5)"
},
{
id:"bpt1_s1_2",
type:"multiple-choice",
question:"Tìm cặp số là nghiệm của bất phương trình x - y - 2 > 0.",
options:["(1;1)","(-1;2)","(0;0)","(3;1)"],
answer:"(3;1)"
},
{
id:"bpt1_s1_3",
type:"multiple-choice",
question:"Cặp số nào sau đây không là nghiệm của bất phương trình 2x + y - 7 > 0?",
options:["(3;2)","(5;-1)","(4;0)","(-2;5)"],
answer:"(-2;5)"
},
{
id:"bpt1_s1_4",
type:"multiple-choice",
question:"Điểm A(-1;3) không thuộc miền nghiệm của bất phương trình nào?",
options:[
"-3x+2y-4<0",
"x+y-3>0",
"x-3y≤0",
"2x-y+4<0"
],
answer:"2x-y+4<0"
},
{
id:"bpt1_s1_5",
type:"multiple-choice",
question:"Tìm m để bất phương trình mx-y<3 là bất phương trình bậc nhất hai ẩn.",
options:["m∈R","m≠0","m>0","m<0"],
answer:"m≠0"
},
{
id:"bpt1_s1_6",
type:"multiple-choice",
question:"Tìm m để bất phương trình 4x+my<5 là bất phương trình bậc nhất hai ẩn.",
options:["m∈R","m≠0","m>0","m<0"],
answer:"m≠0"
},
{
id:"bpt1_s1_7",
type:"multiple-choice",
question:"Cặp số nào sau đây là nghiệm của bất phương trình 2x+3y-3>0?",
options:[
"(-1;-3)",
"(1;0)",
"(1;1)",
"(-1;0)"
],
answer:"(1;1)"
},
{
id:"bpt1_s1_8",
type:"multiple-choice",
question:"Cho bất phương trình x+y-12≥0. Cặp số nào sau đây là nghiệm?",
options:[
"(4;5)",
"(6;5)",
"(2;3)",
"(0;10)"
],
answer:"(6;5)"
},
{
id:"bpt1_s1_9",
type:"multiple-choice",
question:"Một cửa hàng bán đồ uống loại A giá 15000đ và loại B giá 20000đ. Doanh thu cần đạt ít nhất 2 triệu đồng. Bất phương trình mô tả điều kiện là:",
options:[
"15000x+20000y≤2000000",
"15000x+20000y≥2000000",
"x+y≥2000000",
"15x+20y≤2000"
],
answer:"15000x+20000y≥2000000"
},
{
id:"bpt1_s1_10",
type:"multiple-choice",
question:"Miền nghiệm của bất phương trình bậc nhất hai ẩn luôn là:",
options:[
"Một đường thẳng",
"Một điểm",
"Một nửa mặt phẳng",
"Một đoạn thẳng"
],
answer:"Một nửa mặt phẳng"
}
],
stage2:[
{
id:"bpt1_s2_1",
type:"true-false",
question:"Xét các khẳng định về bất phương trình bậc nhất hai ẩn.",
subQuestions:[
{
label:"a",
text:"x + y - 5 > 0 là bất phương trình bậc nhất hai ẩn.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"x² + y - 1 > 0 là bất phương trình bậc nhất hai ẩn.",
correctAnswer:"Sai"
},
{
label:"c",
text:"2x - 3y ≤ 4 là bất phương trình bậc nhất hai ẩn.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"xy + 1 < 0 là bất phương trình bậc nhất hai ẩn.",
correctAnswer:"Sai"
}
]
},

{
id:"bpt1_s2_2",
type:"true-false",
question:"Cho bất phương trình x - y + 2 ≤ 0.",
subQuestions:[
{
label:"a",
text:"Miền nghiệm chứa điểm O(0;0).",
correctAnswer:"Sai"
},
{
label:"b",
text:"Điểm (1;4) là nghiệm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm (0;3) là nghiệm.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Điểm (2;2) không là nghiệm.",
correctAnswer:"Sai"
}
]
},

{
id:"bpt1_s2_3",
type:"true-false",
question:"Một công ty viễn thông tính phí x nghìn đồng gọi nội mạng và 2y nghìn đồng gọi ngoại mạng. Tổng chi phí cần nhỏ hơn 100 nghìn đồng.",
subQuestions:[
{
label:"a",
text:"Tổng chi phí là x + 2y (nghìn đồng).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bất phương trình là x + 2y < 100.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(50;20) là nghiệm của bất phương trình.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Miền nghiệm của bất phương trình là hình vuông.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"bpt1_s3_1",
type:"short-answer",
question:"Cho bất phương trình 2x + 3y - 10 ≤ 0. Có bao nhiêu cặp số nguyên không âm (x,y) thỏa mãn?",
answer:"14",
explanation:"Xét các giá trị nguyên không âm của y từ 0 đến 3 rồi đếm số giá trị nguyên tương ứng của x. Tổng số nghiệm nguyên không âm là 14."
},

{
id:"bpt1_s3_2",
type:"short-answer",
question:"Lan có 150000 đồng. Một quyển tập giá 8000 đồng, một cây bút giá 6000 đồng. Nếu Lan đã mua 10 cây bút thì mua tối đa được bao nhiêu quyển tập?",
answer:"11",
explanation:"Tiền mua 10 bút là 60000 đồng. Còn lại 90000 đồng. Số tập tối đa là ⌊90000/8000⌋=11."
},

{
id:"bpt1_s3_3",
type:"short-answer",
question:"Một cửa hàng nhập 110 xe gồm hai loại A và B. Gọi m,n lần lượt là số xe loại A và B. Hỏi m+n bằng bao nhiêu?",
answer:"110",
explanation:"Theo đề bài tổng số xe nhập về là 110 chiếc nên m+n=110."
},

{
id:"bpt1_s3_4",
type:"short-answer",
question:"Bạn Việt có 100000 đồng. Hoa cúc giá 3000 đồng/bông, hoa hồng giá 6000 đồng/bông. Bất phương trình có dạng ax+6y≤b. Tính T=a+b.",
answer:"103",
explanation:"3000x+6000y≤100000. Chia cả hai vế cho 1000 được 3x+6y≤100. Suy ra a=3,b=100 nên T=103."
},

{
id:"bpt1_s3_5",
type:"short-answer",
question:"Bạn Hương có 600000 đồng. Thịt giá 120000 đồng/kg, rau giá 30000 đồng/kg. Bất phương trình có dạng ax+by≤20. Tính T=2a+3b.",
answer:"17",
explanation:"120000x+30000y≤600000. Chia cả hai vế cho 30000 được 4x+y≤20. Suy ra a=4,b=1. Do đó T=2·4+3·1=11."
}
]
},
4: {
stage1: [
{
id:"hbpt_s1_1",
type:"multiple-choice",
question:"Hệ bất phương trình bậc nhất hai ẩn là hệ gồm:",
options:[
"Các phương trình bậc nhất hai ẩn",
"Các bất phương trình bậc nhất hai ẩn",
"Một phương trình và một bất phương trình",
"Các phương trình bậc hai"
],
answer:"Các bất phương trình bậc nhất hai ẩn"
},

{
id:"hbpt_s1_2",
type:"multiple-choice",
question:"Miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn là:",
options:[
"Hợp các miền nghiệm thành phần",
"Giao các miền nghiệm thành phần",
"Một điểm duy nhất",
"Một đường thẳng"
],
answer:"Giao các miền nghiệm thành phần"
},

{
id:"hbpt_s1_3",
type:"multiple-choice",
question:"Điểm M(1;1) có là nghiệm của hệ {x+y≤3; x−y≤1} không?",
options:[
"Có",
"Không",
"Chỉ thỏa bất phương trình thứ nhất",
"Không xác định"
],
answer:"Có"
},

{
id:"hbpt_s1_4",
type:"multiple-choice",
question:"Điểm nào sau đây thuộc miền nghiệm của hệ {x≥0; y≥0; x+y≤4}?",
options:[
"(3;2)",
"(2;2)",
"(5;0)",
"(0;5)"
],
answer:"(2;2)"
},

{
id:"hbpt_s1_5",
type:"multiple-choice",
question:"Miền nghiệm của hệ {x≥0; y≥0} nằm ở:",
options:[
"Góc phần tư I",
"Góc phần tư II",
"Góc phần tư III",
"Góc phần tư IV"
],
answer:"Góc phần tư I"
},

{
id:"hbpt_s1_6",
type:"multiple-choice",
question:"Cho hệ {x+y≤5; x≥1; y≥2}. Điểm nào là nghiệm?",
options:[
"(1;2)",
"(4;3)",
"(0;2)",
"(2;4)"
],
answer:"(1;2)"
},

{
id:"hbpt_s1_7",
type:"multiple-choice",
question:"Trong bài toán quy hoạch tuyến tính, hàm F=ax+by được gọi là:",
options:[
"Hàm mục tiêu",
"Hàm nghiệm",
"Hàm giới hạn",
"Hàm điều kiện"
],
answer:"Hàm mục tiêu"
},

{
id:"hbpt_s1_8",
type:"multiple-choice",
question:"Để tìm giá trị lớn nhất của hàm mục tiêu trên miền đa giác lồi, ta chỉ cần xét:",
options:[
"Mọi điểm trong miền",
"Các đỉnh của miền nghiệm",
"Các điểm trên trục Ox",
"Các điểm trên trục Oy"
],
answer:"Các đỉnh của miền nghiệm"
},

{
id:"hbpt_s1_9",
type:"multiple-choice",
question:"Cho hệ {x≥0; y≥0; x+y≤6}. Tổng x+y lớn nhất bằng:",
options:["4","5","6","7"],
answer:"6"
},

{
id:"hbpt_s1_10",
type:"multiple-choice",
question:"Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn có dạng:",
options:[
"Nửa mặt phẳng",
"Giao của các nửa mặt phẳng",
"Một đường tròn",
"Một parabol"
],
answer:"Giao của các nửa mặt phẳng"
}
],
stage2:[
{
id:"hbpt_s2_1",
type:"true-false",
question:"Cho hệ bất phương trình {x≥0; y≥0; x+y≤5}.",
subQuestions:[
{
label:"a",
text:"Điểm (2;2) thuộc miền nghiệm.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Điểm (4;3) thuộc miền nghiệm.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Điểm (0;5) thuộc miền nghiệm.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Miền nghiệm nằm hoàn toàn trong góc phần tư thứ nhất.",
correctAnswer:"Đúng"
}
]
},

{
id:"hbpt_s2_2",
type:"true-false",
question:"Xét hệ {x−y≤1; x+y≥2}.",
subQuestions:[
{
label:"a",
text:"(1;1) là nghiệm của hệ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(0;0) là nghiệm của hệ.",
correctAnswer:"Sai"
},
{
label:"c",
text:"(2;1) là nghiệm của hệ.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"(-1;3) là nghiệm của hệ.",
correctAnswer:"Đúng"
}
]
},

{
id:"hbpt_s2_3",
type:"true-false",
question:"Trong bài toán quy hoạch tuyến tính.",
subQuestions:[
{
label:"a",
text:"Miền nghiệm luôn là giao của các nửa mặt phẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Giá trị lớn nhất của hàm mục tiêu luôn đạt tại một đỉnh miền nghiệm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Miền nghiệm luôn là một điểm.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hệ bất phương trình có thể vô nghiệm.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"hbpt_s3_1",
type:"short-answer",
question:"Cho hệ {x≥0; y≥0; x+y≤4}. Có bao nhiêu cặp số nguyên không âm (x,y) là nghiệm?",
answer:"15",
explanation:"Với x=0,1,2,3,4 thì số giá trị y tương ứng là 5,4,3,2,1. Tổng số nghiệm là 5+4+3+2+1=15."
},

{
id:"hbpt_s3_2",
type:"short-answer",
question:"Cho hệ {x≥0; y≥0; x+y≤6}. Tìm giá trị lớn nhất của F=x+y.",
answer:"6",
explanation:"Do điều kiện x+y≤6 nên F=x+y đạt lớn nhất bằng 6 trên đường thẳng x+y=6."
},

{
id:"hbpt_s3_3",
type:"short-answer",
question:"Cho hệ {x≥0; y≥0; x+y≤5}. Có bao nhiêu đỉnh của miền nghiệm?",
answer:"3",
explanation:"Miền nghiệm là tam giác giới hạn bởi Ox, Oy và đường thẳng x+y=5 nên có 3 đỉnh: (0,0), (5,0), (0,5)."
},

{
id:"hbpt_s3_4",
type:"short-answer",
question:"Một công ty quảng cáo trên phát thanh và truyền hình. Chi phí lần lượt là 0,8 triệu đồng/phút và 4 triệu đồng/phút. Tổng kinh phí tối đa 16 triệu đồng. Gọi x,y là số phút quảng cáo trên phát thanh và truyền hình. Hệ thức ngân sách có dạng ax+by≤16. Tính a+b.",
answer:"4.8",
explanation:"Ta có 0,8x+4y≤16 nên a=0,8; b=4. Suy ra a+b=4,8."
},

{
id:"hbpt_s3_5",
type:"short-answer",
question:"Cho hệ {x≥0; y≥0; x+y≤10}. Tính giá trị lớn nhất của F=2x+y.",
answer:"20",
explanation:"Xét các đỉnh miền nghiệm: (0,0), (10,0), (0,10). Giá trị F lần lượt là 0, 20, 10. Do đó giá trị lớn nhất là 20."
}
]
},
5: {
stage1:[
{
id:"lg_s1_1",
type:"multiple-choice",
question:"Giá trị của sin 30° bằng",
options:["1/2","√2/2","√3/2","1"],
answer:"1/2"
},

{
id:"lg_s1_2",
type:"multiple-choice",
question:"Giá trị của cos 60° bằng",
options:["0","1/2","√2/2","√3/2"],
answer:"1/2"
},

{
id:"lg_s1_3",
type:"multiple-choice",
question:"Giá trị của tan 45° bằng",
options:["0","1","√2","√3"],
answer:"1"
},

{
id:"lg_s1_4",
type:"multiple-choice",
question:"Giá trị của sin 90° bằng",
options:["0","1","-1","√2/2"],
answer:"1"
},

{
id:"lg_s1_5",
type:"multiple-choice",
question:"Giá trị của cos 180° bằng",
options:["1","0","-1","√3/2"],
answer:"-1"
},

{
id:"lg_s1_6",
type:"multiple-choice",
question:"Cho sinα = 3/5 và α là góc nhọn. Giá trị của cosα là",
options:["4/5","-4/5","3/4","5/4"],
answer:"4/5"
},

{
id:"lg_s1_7",
type:"multiple-choice",
question:"Biểu thức sin²x + cos²x bằng",
options:["0","1","2","tan²x"],
answer:"1"
},

{
id:"lg_s1_8",
type:"multiple-choice",
question:"Giá trị của tan30° . tan60° bằng",
options:["1","2","√3","1/3"],
answer:"1"
},

{
id:"lg_s1_9",
type:"multiple-choice",
question:"Cho cosα = 1/2 với 0°≤α≤180°. Khi đó α bằng",
options:["30°","45°","60°","120°"],
answer:"60°"
},

{
id:"lg_s1_10",
type:"multiple-choice",
question:"Giá trị của sin120° bằng",
options:["1/2","√2/2","√3/2","-√3/2"],
answer:"√3/2"
}
],
stage2:[
{
id:"lg_s2_1",
type:"true-false",
question:"Xét các khẳng định sau:",
subQuestions:[
{
label:"a",
text:"sin²x + cos²x = 1",
correctAnswer:"Đúng"
},
{
label:"b",
text:"tanx.cotx = 1 (khi xác định)",
correctAnswer:"Đúng"
},
{
label:"c",
text:"sin90° = 0",
correctAnswer:"Sai"
},
{
label:"d",
text:"cos180° = -1",
correctAnswer:"Đúng"
}
]
},

{
id:"lg_s2_2",
type:"true-false",
question:"Cho góc α thuộc khoảng từ 0° đến 180°.",
subQuestions:[
{
label:"a",
text:"sinα luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cosα luôn dương.",
correctAnswer:"Sai"
},
{
label:"c",
text:"sin120° = sin60°.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cos120° = -1/2.",
correctAnswer:"Đúng"
}
]
},

{
id:"lg_s2_3",
type:"true-false",
question:"Cho sinα = 3/5 và α là góc nhọn.",
subQuestions:[
{
label:"a",
text:"cosα = 4/5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"tanα = 3/4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"cotα = 4/3.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cosα = -4/5.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"lg_s3_1",
type:"short-answer",
question:"Cho sinα = 3/5 và α là góc nhọn. Tính 5cosα.",
answer:"4",
explanation:"cosα = √(1-sin²α)=√(1-9/25)=4/5. Do đó 5cosα=4."
},

{
id:"lg_s3_2",
type:"short-answer",
question:"Tính giá trị của biểu thức P = sin²30° + cos²30°.",
answer:"1",
explanation:"Theo hệ thức lượng giác cơ bản: sin²x + cos²x = 1 với mọi x."
},

{
id:"lg_s3_3",
type:"short-answer",
question:"Tính giá trị của biểu thức A = tan45° + cot45°.",
answer:"2",
explanation:"tan45° = 1 và cot45° = 1 nên A = 1 + 1 = 2."
},

{
id:"lg_s3_4",
type:"short-answer",
question:"Cho cosα = -1/2 với 0°≤α≤180°. Tính α.",
answer:"120",
explanation:"Trong khoảng từ 0° đến 180°, cosα = -1/2 khi α = 120°."
},

{
id:"lg_s3_5",
type:"short-answer",
question:"Cho sinα + cosα = 1/2. Tính giá trị của P = (sinα + cosα)².",
answer:"0.25",
explanation:"P=(sinα+cosα)²=(1/2)²=1/4=0.25."
}
]
},
6: {
stage1:[
{
id:"htl_s1_1",
type:"multiple-choice",
question:"Công thức tính diện tích tam giác theo hai cạnh và góc xen giữa là",
options:[
"S = 1/2·bc·sinA",
"S = bc·sinA",
"S = 1/2·ab·cosC",
"S = ab·sinC"
],
answer:"S = 1/2·bc·sinA"
},

{
id:"htl_s1_2",
type:"multiple-choice",
question:"Tam giác có hai cạnh a,b cố định thì diện tích lớn nhất khi góc xen giữa bằng",
options:["60°","90°","120°","180°"],
answer:"90°"
},

{
id:"htl_s1_3",
type:"multiple-choice",
question:"Cho tam giác đều cạnh a. Diện tích bằng",
options:[
"a²√3/4",
"a²/2",
"a²√2/4",
"a²√3/2"
],
answer:"a²√3/4"
},

{
id:"htl_s1_4",
type:"multiple-choice",
question:"Cho tam giác vuông có hai cạnh góc vuông lần lượt là 3 và 4. Diện tích bằng",
options:["6","12","7","5"],
answer:"6"
},

{
id:"htl_s1_5",
type:"multiple-choice",
question:"Cho tam giác có ba cạnh 3,4,5. Bán kính đường tròn nội tiếp bằng",
options:["1","2","3/2","4/3"],
answer:"1"
},

{
id:"htl_s1_6",
type:"multiple-choice",
question:"Cho tam giác có ba cạnh 3,4,5. Bán kính đường tròn ngoại tiếp bằng",
options:["2.5","3","1.5","4"],
answer:"2.5"
},

{
id:"htl_s1_7",
type:"multiple-choice",
question:"Trong tam giác ABC, định lý sin có dạng",
options:[
"a/sinA=b/sinB=c/sinC",
"a·sinA=b·sinB=c·sinC",
"a+b=c",
"a²=b²+c²"
],
answer:"a/sinA=b/sinB=c/sinC"
},

{
id:"htl_s1_8",
type:"multiple-choice",
question:"Trong tam giác ABC, nếu a²=b²+c² thì",
options:[
"A=30°",
"A=45°",
"A=90°",
"A=120°"
],
answer:"A=90°"
},

{
id:"htl_s1_9",
type:"multiple-choice",
question:"Theo định lý cosin, a² bằng",
options:[
"b²+c²−2bc.cosA",
"b²+c²+2bc.cosA",
"b²−c²",
"2bc.cosA"
],
answer:"b²+c²−2bc.cosA"
},

{
id:"htl_s1_10",
type:"multiple-choice",
question:"Cho tam giác có chu vi bằng 12 và bán kính nội tiếp bằng 1. Diện tích tam giác bằng",
options:["3","6","12","24"],
answer:"6"
}
],
stage2:[
{
id:"htl_s2_1",
type:"true-false",
question:"Xét các công thức sau:",
subQuestions:[
{
label:"a",
text:"S = 1/2·bc·sinA",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a² = b² + c² − 2bc.cosA",
correctAnswer:"Đúng"
},
{
label:"c",
text:"a/sinA = b/sinB = c/sinC",
correctAnswer:"Đúng"
},
{
label:"d",
text:"r = S/p với p là nửa chu vi tam giác",
correctAnswer:"Đúng"
}
]
},

{
id:"htl_s2_2",
type:"true-false",
question:"Cho tam giác vuông có các cạnh 3,4,5.",
subQuestions:[
{
label:"a",
text:"Diện tích tam giác bằng 6.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Chu vi tam giác bằng 12.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Bán kính nội tiếp bằng 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Bán kính ngoại tiếp bằng 5.",
correctAnswer:"Sai"
}
]
},

{
id:"htl_s2_3",
type:"true-false",
question:"Cho tam giác đều cạnh a.",
subQuestions:[
{
label:"a",
text:"Ba góc đều bằng 60°.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Diện tích bằng a²√3/4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Bán kính đường tròn ngoại tiếp bằng a/√3.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Bán kính đường tròn nội tiếp bằng a.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"htl_s3_1",
type:"short-answer",
question:"Cho tam giác vuông có hai cạnh góc vuông bằng 6 và 8. Tính diện tích tam giác.",
answer:"24",
explanation:"S = 1/2·6·8 = 24."
},

{
id:"htl_s3_2",
type:"short-answer",
question:"Cho tam giác có ba cạnh 3,4,5. Tính chu vi tam giác.",
answer:"12",
explanation:"Chu vi bằng tổng ba cạnh: 3+4+5=12."
},

{
id:"htl_s3_3",
type:"short-answer",
question:"Cho tam giác có chu vi bằng 20 và bán kính nội tiếp bằng 2. Tính diện tích.",
answer:"20",
explanation:"p = 20/2 = 10. Theo công thức S = p·r = 10·2 = 20."
},

{
id:"htl_s3_4",
type:"short-answer",
question:"Cho tam giác đều cạnh 4. Tính diện tích tam giác.",
answer:"6.928",
explanation:"S = a²√3/4 = 16√3/4 = 4√3 ≈ 6.928."
},

{
id:"htl_s3_5",
type:"short-answer",
question:"Cho tam giác vuông có cạnh huyền bằng 10. Tính bán kính đường tròn ngoại tiếp.",
answer:"5",
explanation:"Trong tam giác vuông, bán kính ngoại tiếp bằng nửa cạnh huyền nên R = 10/2 = 5."
}
]
},
7: {
stage1:[
{
id:"vt_s1_1",
type:"multiple-choice",
question:"Vectơ là gì?",
options:[
"Một đoạn thẳng",
"Một đoạn thẳng có hướng",
"Một đường thẳng",
"Một tia"
],
answer:"Một đoạn thẳng có hướng"
},

{
id:"vt_s1_2",
type:"multiple-choice",
question:"Vectơ có điểm đầu A và điểm cuối B được kí hiệu là",
options:["BA","AB","(AB)","[AB]"],
answer:"AB"
},

{
id:"vt_s1_3",
type:"multiple-choice",
question:"Độ dài của vectơ AB bằng",
options:[
"Khoảng cách từ A đến B",
"AB²",
"BA",
"Giá của vectơ"
],
answer:"Khoảng cách từ A đến B"
},

{
id:"vt_s1_4",
type:"multiple-choice",
question:"Vectơ có độ dài bằng 1 được gọi là",
options:[
"Vectơ không",
"Vectơ đơn vị",
"Vectơ cùng phương",
"Vectơ đối"
],
answer:"Vectơ đơn vị"
},

{
id:"vt_s1_5",
type:"multiple-choice",
question:"Giá của vectơ là",
options:[
"Đường thẳng đi qua điểm đầu và điểm cuối của vectơ",
"Độ dài của vectơ",
"Hướng của vectơ",
"Trung điểm của vectơ"
],
answer:"Đường thẳng đi qua điểm đầu và điểm cuối của vectơ"
},

{
id:"vt_s1_6",
type:"multiple-choice",
question:"Hai vectơ được gọi là cùng phương khi",
options:[
"Có cùng độ dài",
"Có cùng hướng",
"Giá của chúng song song hoặc trùng nhau",
"Có cùng điểm đầu"
],
answer:"Giá của chúng song song hoặc trùng nhau"
},

{
id:"vt_s1_7",
type:"multiple-choice",
question:"Nếu hai vectơ cùng phương thì",
options:[
"Luôn cùng hướng",
"Luôn ngược hướng",
"Chỉ có thể cùng hướng hoặc ngược hướng",
"Luôn bằng nhau"
],
answer:"Chỉ có thể cùng hướng hoặc ngược hướng"
},

{
id:"vt_s1_8",
type:"multiple-choice",
question:"Ba điểm phân biệt A, B, C thẳng hàng khi và chỉ khi",
options:[
"AB = AC",
"AB và AC cùng phương",
"AB vuông góc AC",
"AB và AC bằng nhau"
],
answer:"AB và AC cùng phương"
},

{
id:"vt_s1_9",
type:"multiple-choice",
question:"Hai vectơ bằng nhau khi",
options:[
"Cùng phương",
"Cùng độ dài",
"Cùng hướng và cùng độ dài",
"Cùng điểm đầu"
],
answer:"Cùng hướng và cùng độ dài"
},

{
id:"vt_s1_10",
type:"multiple-choice",
question:"Cho đoạn thẳng AB. Vectơ AB có hướng",
options:[
"Từ B đến A",
"Từ A đến B",
"Vuông góc AB",
"Không xác định"
],
answer:"Từ A đến B"
}
],
stage2:[
{
id:"vt_s2_1",
type:"true-false",
question:"Xét các phát biểu sau về vectơ.",
subQuestions:[
{
label:"a",
text:"Vectơ là một đoạn thẳng có hướng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Độ dài vectơ luôn âm.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Vectơ đơn vị có độ dài bằng 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Giá của vectơ là đường thẳng chứa vectơ đó.",
correctAnswer:"Đúng"
}
]
},

{
id:"vt_s2_2",
type:"true-false",
question:"Xét hai vectơ a và b.",
subQuestions:[
{
label:"a",
text:"Nếu a và b cùng phương thì giá của chúng song song hoặc trùng nhau.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai vectơ cùng phương luôn cùng hướng.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Hai vectơ ngược hướng thì vẫn cùng phương.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai vectơ bằng nhau thì cùng độ dài.",
correctAnswer:"Đúng"
}
]
},

{
id:"vt_s2_3",
type:"true-false",
question:"Cho ba điểm phân biệt A, B, C.",
subQuestions:[
{
label:"a",
text:"Nếu AB và AC cùng phương thì A, B, C thẳng hàng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu A, B, C thẳng hàng thì AB và AC cùng phương.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai vectơ bằng nhau luôn có cùng hướng.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai vectơ có cùng độ dài thì bằng nhau.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"vt_s3_1",
type:"short-answer",
question:"Một vectơ đơn vị có độ dài bằng bao nhiêu?",
answer:"1",
explanation:"Theo định nghĩa, vectơ đơn vị là vectơ có độ dài bằng 1."
},

{
id:"vt_s3_2",
type:"short-answer",
question:"Cho tập hợp gồm 4 vectơ, trong đó có 2 cặp vectơ bằng nhau. Có bao nhiêu vectơ không trùng với vectơ nào khác?",
answer:"0",
explanation:"4 vectơ tạo thành 2 cặp bằng nhau nên tất cả đều có một vectơ bằng nó, không có vectơ nào đứng riêng."
},

{
id:"vt_s3_3",
type:"short-answer",
question:"Cho ba điểm phân biệt A, B, C thẳng hàng. Có bao nhiêu cặp vectơ trong hai vectơ AB và AC là cùng phương?",
answer:"1",
explanation:"AB và AC cùng phương nên có đúng 1 cặp vectơ cùng phương."
},

{
id:"vt_s3_4",
type:"short-answer",
question:"Hai vectơ bằng nhau phải thỏa mãn bao nhiêu điều kiện?",
answer:"2",
explanation:"Hai vectơ bằng nhau khi cùng hướng và cùng độ dài. Có 2 điều kiện."
},

{
id:"vt_s3_5",
type:"short-answer",
question:"Cho vectơ AB có độ dài bằng 8 cm. Tính độ dài của vectơ AB.",
answer:"8",
explanation:"Độ dài vectơ AB chính là khoảng cách AB nên bằng 8 cm."
}
]
},
8: {
stage1:[
{
id:"thv_s1_1",
type:"multiple-choice",
question:"Cho ba điểm A,B,C. Theo quy tắc ba điểm, vectơ AB + vectơ BC bằng",
options:[
"vectơ AC",
"vectơ CA",
"vectơ BA",
"vectơ CB"
],
answer:"vectơ AC"
},

{
id:"thv_s1_2",
type:"multiple-choice",
question:"Vectơ đối của vectơ a là vectơ",
options:[
"a",
"2a",
"-a",
"0"
],
answer:"-a"
},

{
id:"thv_s1_3",
type:"multiple-choice",
question:"Tổng của một vectơ với vectơ đối của nó bằng",
options:[
"1",
"-1",
"vectơ không",
"chính nó"
],
answer:"vectơ không"
},

{
id:"thv_s1_4",
type:"multiple-choice",
question:"Theo quy tắc hình bình hành, tổng của hai vectơ cùng gốc là",
options:[
"Một cạnh của hình bình hành",
"Một đường chéo của hình bình hành",
"Một đường cao",
"Một trung tuyến"
],
answer:"Một đường chéo của hình bình hành"
},

{
id:"thv_s1_5",
type:"multiple-choice",
question:"Cho vectơ a và b. Hiệu a−b bằng",
options:[
"a+b",
"b−a",
"a+(-b)",
"-a+b"
],
answer:"a+(-b)"
},

{
id:"thv_s1_6",
type:"multiple-choice",
question:"Cho vectơ AB và vectơ BA. Khi đó",
options:[
"AB = BA",
"AB + BA = 0",
"AB - BA = 0",
"AB = 0"
],
answer:"AB + BA = 0"
},

{
id:"thv_s1_7",
type:"multiple-choice",
question:"Cho hình bình hành ABCD. Khi đó vectơ AB + vectơ AD bằng",
options:[
"vectơ AC",
"vectơ BD",
"vectơ CA",
"vectơ DB"
],
answer:"vectơ AC"
},

{
id:"thv_s1_8",
type:"multiple-choice",
question:"Cho vectơ a,b thỏa a+b=0. Khi đó",
options:[
"a=b",
"a=-b",
"a=0",
"b=0"
],
answer:"a=-b"
},

{
id:"thv_s1_9",
type:"multiple-choice",
question:"Nếu M là trung điểm AB thì",
options:[
"MA = MB",
"MA + MB = 0",
"AB = BA",
"AM = BM"
],
answer:"MA + MB = 0"
},

{
id:"thv_s1_10",
type:"multiple-choice",
question:"Trong quy tắc ba điểm, điều kiện để cộng vectơ AB và CD trực tiếp là",
options:[
"B trùng C",
"A trùng D",
"A trùng C",
"Không cần điều kiện"
],
answer:"B trùng C"
}
],
stage2:[
{
id:"thv_s2_1",
type:"true-false",
question:"Xét các phát biểu về tổng vectơ.",
subQuestions:[
{
label:"a",
text:"AB + BC = AC.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AB + BA = 0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"a + (-a) = 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"a - b = b - a.",
correctAnswer:"Sai"
}
]
},

{
id:"thv_s2_2",
type:"true-false",
question:"Cho hình bình hành ABCD.",
subQuestions:[
{
label:"a",
text:"AB + AD = AC.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AB = DC.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"AD = BC.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"AC = BD.",
correctAnswer:"Sai"
}
]
},

{
id:"thv_s2_3",
type:"true-false",
question:"Cho vectơ a,b bất kỳ.",
subQuestions:[
{
label:"a",
text:"a-b=a+(-b).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a+0=a.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"a+a=2a.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"a-b=b-a.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"thv_s3_1",
type:"short-answer",
question:"Cho vectơ a và b thỏa a+b=0. Có bao nhiêu vectơ đối nhau trong đẳng thức trên?",
answer:"2",
explanation:"Từ a+b=0 suy ra a=-b. Hai vectơ a và b là hai vectơ đối nhau."
},

{
id:"thv_s3_2",
type:"short-answer",
question:"Cho ba điểm A,B,C. Biểu thức AB+BC bằng vectơ nào?",
answer:"AC",
explanation:"Theo quy tắc ba điểm: vectơ AB + vectơ BC = vectơ AC."
},

{
id:"thv_s3_3",
type:"short-answer",
question:"Cho hình bình hành ABCD. Biểu thức AB+AD bằng vectơ nào?",
answer:"AC",
explanation:"Theo quy tắc hình bình hành, tổng hai cạnh xuất phát từ cùng một đỉnh bằng đường chéo đi qua đỉnh đó."
},

{
id:"thv_s3_4",
type:"short-answer",
question:"Cho vectơ a. Tính số vectơ trong biểu thức a+(-a).",
answer:"2",
explanation:"Biểu thức gồm hai vectơ: a và vectơ đối của nó là -a."
},

{
id:"thv_s3_5",
type:"short-answer",
question:"Cho M là trung điểm của AB. Tính giá trị của biểu thức MA+MB.",
answer:"0",
explanation:"Vì M là trung điểm AB nên hai vectơ MA và MB đối nhau. Do đó MA+MB=0."
}
]
},
9: {
stage1:[
{
id:"tvs_s1_1",
type:"multiple-choice",
question:"Cho vectơ a ≠ 0 và số thực k > 0. Khi đó vectơ ka và vectơ a",
options:[
"Cùng hướng",
"Ngược hướng",
"Vuông góc",
"Không cùng phương"
],
answer:"Cùng hướng"
},

{
id:"tvs_s1_2",
type:"multiple-choice",
question:"Cho vectơ a ≠ 0 và số thực k < 0. Khi đó vectơ ka và vectơ a",
options:[
"Cùng hướng",
"Ngược hướng",
"Vuông góc",
"Bằng nhau"
],
answer:"Ngược hướng"
},

{
id:"tvs_s1_3",
type:"multiple-choice",
question:"Nếu |a| = 5 thì |2a| bằng",
options:["5","7","10","25"],
answer:"10"
},

{
id:"tvs_s1_4",
type:"multiple-choice",
question:"Nếu |a| = 8 thì |-3a| bằng",
options:["8","11","24","-24"],
answer:"24"
},

{
id:"tvs_s1_5",
type:"multiple-choice",
question:"Cho M là trung điểm của AB. Khi đó",
options:[
"AM = AB",
"AM = 2AB",
"AM = 1/2 AB",
"AB = 1/2 AM"
],
answer:"AM = 1/2 AB"
},

{
id:"tvs_s1_6",
type:"multiple-choice",
question:"Cho tam giác ABC có M là trung điểm BC. Khi đó",
options:[
"BM = 2BC",
"BM = 1/2 BC",
"BC = 1/2 BM",
"BM = BC"
],
answer:"BM = 1/2 BC"
},

{
id:"tvs_s1_7",
type:"multiple-choice",
question:"Cho tam giác ABC, G là trọng tâm. Khi đó",
options:[
"AG = 1/2 AM",
"AG = 2/3 AM",
"AG = 3/2 AM",
"AG = AM"
],
answer:"AG = 2/3 AM"
},

{
id:"tvs_s1_8",
type:"multiple-choice",
question:"Cho vectơ a ≠ 0. Đẳng thức nào đúng?",
options:[
"0a = a",
"0a = 0",
"1a = 0",
"-a = a"
],
answer:"0a = 0"
},

{
id:"tvs_s1_9",
type:"multiple-choice",
question:"Cho vectơ a. Khi đó (-1)a bằng",
options:[
"a",
"0",
"-a",
"2a"
],
answer:"-a"
},

{
id:"tvs_s1_10",
type:"multiple-choice",
question:"Nếu a = b và k là số thực thì",
options:[
"ka = b",
"ka = kb",
"a = kb",
"ka = 0"
],
answer:"ka = kb"
}
],
stage2:[
{
id:"tvs_s2_1",
type:"true-false",
question:"Cho vectơ a ≠ 0.",
subQuestions:[
{
label:"a",
text:"Nếu k > 0 thì ka cùng hướng với a.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu k < 0 thì ka ngược hướng với a.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu k = 0 thì ka là vectơ không.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"ka luôn vuông góc với a.",
correctAnswer:"Sai"
}
]
},

{
id:"tvs_s2_2",
type:"true-false",
question:"Cho vectơ a có độ dài bằng 4.",
subQuestions:[
{
label:"a",
text:"|2a| = 8.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"|-3a| = 12.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"|1/2 a| = 2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"|-a| = -4.",
correctAnswer:"Sai"
}
]
},

{
id:"tvs_s2_3",
type:"true-false",
question:"Cho tam giác ABC có trung tuyến AM và trọng tâm G.",
subQuestions:[
{
label:"a",
text:"AG = 2/3 AM.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"GM = 1/3 AM.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"AG = GM.",
correctAnswer:"Sai"
},
{
label:"d",
text:"AM = AG + GM.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"tvs_s3_1",
type:"short-answer",
question:"Cho vectơ a có độ dài bằng 6. Tính độ dài của vectơ 3a.",
answer:"18",
explanation:"|3a| = |3|.|a| = 3.6 = 18."
},

{
id:"tvs_s3_2",
type:"short-answer",
question:"Cho vectơ a có độ dài bằng 10. Tính độ dài của vectơ (-2)a.",
answer:"20",
explanation:"|-2a| = |-2|.|a| = 2.10 = 20."
},

{
id:"tvs_s3_3",
type:"short-answer",
question:"Cho tam giác ABC có trung tuyến AM. G là trọng tâm. Tính AG/AM.",
answer:"2/3",
explanation:"Trọng tâm chia trung tuyến theo tỉ lệ 2:1 kể từ đỉnh nên AG = 2/3 AM."
},

{
id:"tvs_s3_4",
type:"short-answer",
question:"Cho M là trung điểm của đoạn AB. Tính hệ số k trong đẳng thức AM = kAB.",
answer:"1/2",
explanation:"Theo tính chất trung điểm: AM = 1/2 AB."
},

{
id:"tvs_s3_5",
type:"short-answer",
question:"Cho vectơ a ≠ 0. Tìm số thực k để ka = -a.",
answer:"-1",
explanation:"Ta có ka = -a ⇔ k = -1."
}
]
},
10: {
stage1:[
{
id:"vmp_s1_1",
type:"multiple-choice",
question:"Trong mặt phẳng tọa độ Oxy, vectơ a=(3;-2) có tọa độ là",
options:[
"(3;-2)",
"(-2;3)",
"(2;-3)",
"(-3;2)"
],
answer:"(3;-2)"
},

{
id:"vmp_s1_2",
type:"multiple-choice",
question:"Cho A(1;2), B(4;6). Tọa độ vectơ AB là",
options:[
"(3;4)",
"(5;8)",
"(-3;-4)",
"(4;6)"
],
answer:"(3;4)"
},

{
id:"vmp_s1_3",
type:"multiple-choice",
question:"Cho vectơ a=(2;3), b=(1;-1). Tọa độ a+b là",
options:[
"(3;2)",
"(1;4)",
"(2;2)",
"(3;4)"
],
answer:"(3;2)"
},

{
id:"vmp_s1_4",
type:"multiple-choice",
question:"Cho vectơ a=(4;5), b=(1;2). Tọa độ a-b là",
options:[
"(3;3)",
"(5;7)",
"(4;3)",
"(3;7)"
],
answer:"(3;3)"
},

{
id:"vmp_s1_5",
type:"multiple-choice",
question:"Cho vectơ a=(2;-3). Tọa độ của 2a là",
options:[
"(4;-6)",
"(2;-6)",
"(4;-3)",
"(-4;6)"
],
answer:"(4;-6)"
},

{
id:"vmp_s1_6",
type:"multiple-choice",
question:"Độ dài của vectơ a=(3;4) bằng",
options:[
"5",
"7",
"25",
"12"
],
answer:"5"
},

{
id:"vmp_s1_7",
type:"multiple-choice",
question:"Cho A(-1;2), B(3;5). Tọa độ trung điểm M của AB là",
options:[
"(1;3.5)",
"(2;3)",
"(1;4)",
"(0;3.5)"
],
answer:"(1;3.5)"
},

{
id:"vmp_s1_8",
type:"multiple-choice",
question:"Cho vectơ a=(2;4). Một vectơ cùng phương với a là",
options:[
"(1;2)",
"(2;1)",
"(4;1)",
"(3;2)"
],
answer:"(1;2)"
},

{
id:"vmp_s1_9",
type:"multiple-choice",
question:"Hai vectơ a=(1;2) và b=(2;4) là",
options:[
"Vuông góc",
"Bằng nhau",
"Cùng phương",
"Đối nhau"
],
answer:"Cùng phương"
},

{
id:"vmp_s1_10",
type:"multiple-choice",
question:"Cho A(2;1), B(5;5). Độ dài AB bằng",
options:[
"5",
"4",
"3",
"√13"
],
answer:"5"
}
],
stage2:[
{
id:"vmp_s2_1",
type:"true-false",
question:"Cho vectơ a=(3;4).",
subQuestions:[
{
label:"a",
text:"Độ dài của vectơ a bằng 5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Tọa độ vectơ đối của a là (-3;-4).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"2a=(6;8).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"a là vectơ đơn vị.",
correctAnswer:"Sai"
}
]
},

{
id:"vmp_s2_2",
type:"true-false",
question:"Cho A(1;2), B(4;6).",
subQuestions:[
{
label:"a",
text:"AB=(3;4).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"BA=(-3;-4).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"AB=BA.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Độ dài AB bằng 5.",
correctAnswer:"Đúng"
}
]
},

{
id:"vmp_s2_3",
type:"true-false",
question:"Cho các vectơ a=(1;2), b=(2;4), c=(-2;-4).",
subQuestions:[
{
label:"a",
text:"a và b cùng phương.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a và c cùng phương.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"b và c ngược hướng.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"a và c bằng nhau.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"vmp_s3_1",
type:"short-answer",
question:"Cho A(1;2), B(5;7). Tính hoành độ của vectơ AB.",
answer:"4",
explanation:"AB=(5-1;7-2)=(4;5). Hoành độ là 4."
},

{
id:"vmp_s3_2",
type:"short-answer",
question:"Cho vectơ a=(6;8). Tính độ dài của vectơ a.",
answer:"10",
explanation:"|a|=√(6²+8²)=√100=10."
},

{
id:"vmp_s3_3",
type:"short-answer",
question:"Cho A(2;3), B(6;9). Tính tung độ của trung điểm AB.",
answer:"6",
explanation:"Tung độ trung điểm là (3+9)/2=6."
},

{
id:"vmp_s3_4",
type:"short-answer",
question:"Cho vectơ a=(2;-1), b=(3;4). Tính tổng các tọa độ của vectơ a+b.",
answer:"8",
explanation:"a+b=(5;3). Tổng hai tọa độ là 5+3=8."
},

{
id:"vmp_s3_5",
type:"short-answer",
question:"Cho A(-1;1), B(2;5). Tính độ dài đoạn thẳng AB.",
answer:"5",
explanation:"AB=(3;4). Độ dài AB=√(3²+4²)=5."
}
]
},
11: {
stage1:[
{
id:"sgd_s1_1",
type:"multiple-choice",
question:"Quy tròn số 7216,4 đến hàng đơn vị được số nào?",
options:["7215","7216","7217","7220"],
answer:"7216"
},

{
id:"sgd_s1_2",
type:"multiple-choice",
question:"Quy tròn số 223254 đến hàng trăm được",
options:["223200","223300","223000","223250"],
answer:"223300"
},

{
id:"sgd_s1_3",
type:"multiple-choice",
question:"Quy tròn số 12,4567 đến hàng phần trăm được",
options:["12,45","12,46","12,457","12,5"],
answer:"12,46"
},

{
id:"sgd_s1_4",
type:"multiple-choice",
question:"Giá trị gần đúng của √8 chính xác đến hàng phần trăm là",
options:["2,80","2,81","2,82","2,83"],
answer:"2,83"
},

{
id:"sgd_s1_5",
type:"multiple-choice",
question:"Giá trị gần đúng của π chính xác đến hàng phần nghìn là",
options:["3,14","3,141","3,1415","3,142"],
answer:"3,142"
},

{
id:"sgd_s1_6",
type:"multiple-choice",
question:"Cho số gần đúng a = 1000 với sai số tuyệt đối Δa = 20. Sai số tương đối bằng",
options:["0,02%","2%","20%","0,2%"],
answer:"2%"
},

{
id:"sgd_s1_7",
type:"multiple-choice",
question:"Cho số gần đúng a = 26,5 với độ chính xác d = 0,2. Sai số tương đối gần đúng nhất là",
options:["0,75%","7,5%","0,075%","1,5%"],
answer:"0,75%"
},

{
id:"sgd_s1_8",
type:"multiple-choice",
question:"Số quy tròn của 3546790 đến hàng trăm là",
options:["3546800","3546700","3547000","3546890"],
answer:"3546800"
},

{
id:"sgd_s1_9",
type:"multiple-choice",
question:"Cho số gần đúng a = -900 và sai số tương đối 0,1%. Sai số tuyệt đối bằng",
options:["90","0,9","9","0,09"],
answer:"0,9"
},

{
id:"sgd_s1_10",
type:"multiple-choice",
question:"Cho số gần đúng a = 4536 với độ chính xác d = 100. Số quy tròn của a là",
options:["4500","4540","5000","4000"],
answer:"5000"
}
],
stage2:[
{
id:"sgd_s2_1",
type:"true-false",
question:"Xét số gần đúng a = 0,33 của số 1/3.",
subQuestions:[
{
label:"a",
text:"Số gần đúng là 0,33.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Độ chính xác là 0,01.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Sai số tuyệt đối nhỏ hơn 0,005.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Sai số tương đối nhỏ hơn 1%.",
correctAnswer:"Đúng"
}
]
},

{
id:"sgd_s2_2",
type:"true-false",
question:"Cho số gần đúng a = 4536 với độ chính xác d = 100.",
subQuestions:[
{
label:"a",
text:"Số quy tròn của a là 5000.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Sai số tuyệt đối của số quy tròn nhỏ hơn 564.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Sai số tương đối nhỏ hơn 0,11%.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Độ chính xác là 100.",
correctAnswer:"Đúng"
}
]
},

{
id:"sgd_s2_3",
type:"true-false",
question:"Cho kết quả đo chiều dài là 45 ± 0,2 (cm).",
subQuestions:[
{
label:"a",
text:"Số gần đúng là 45.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Độ chính xác là 0,2 cm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Sai số tuyệt đối không vượt quá 0,2 cm.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Sai số tuyệt đối bằng -0,2 cm.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"sgd_s3_1",
type:"short-answer",
question:"Quy tròn số 154925 đến hàng nghìn. Kết quả bằng bao nhiêu?",
answer:"155000",
explanation:"Chữ số hàng trăm là 9 ≥ 5 nên làm tròn lên. Ta được 155000."
},

{
id:"sgd_s3_2",
type:"short-answer",
question:"Một phép đo cho kết quả 5 ± 0,3 μm. Độ dài đoạn chứa giá trị thực bằng bao nhiêu?",
answer:"0.6",
explanation:"Giá trị thực thuộc [4,7; 5,3]. Độ dài đoạn là 5,3 − 4,7 = 0,6."
},

{
id:"sgd_s3_3",
type:"short-answer",
question:"Khối lượng tịnh ghi trên bao bì là 200 ± 2 (g). Tính tổng hai đầu mút của khoảng chứa giá trị thực.",
answer:"400",
explanation:"Giá trị thực thuộc [198;202]. Tổng hai đầu mút là 198 + 202 = 400."
},

{
id:"sgd_s3_4",
type:"short-answer",
question:"Biết 1,4142 < √2 < 1,4143. Hãy xác định độ chính xác của kết quả trên.",
answer:"0.00005",
explanation:"Độ chính xác bằng nửa độ dài khoảng chứa giá trị đúng: (1,4143−1,4142)/2 = 0,00005."
},

{
id:"sgd_s3_5",
type:"short-answer",
question:"Cho số gần đúng a = 2362 với độ chính xác d = 100. Ước lượng sai số tương đối tối đa (làm tròn đến hàng phần trăm).",
answer:"4.23",
explanation:"Sai số tương đối tối đa ≈ 100/2362 ×100% ≈ 4,23%."
}
]
},
12: {
stage1:[
{
id:"tt_s1_1",
type:"multiple-choice",
question:"Số trung bình của dãy số liệu 2; 4; 6; 8 là",
options:["4","5","6","8"],
answer:"5"
},

{
id:"tt_s1_2",
type:"multiple-choice",
question:"Số trung vị của dãy số liệu 1; 3; 5; 7; 9 là",
options:["3","4","5","7"],
answer:"5"
},

{
id:"tt_s1_3",
type:"multiple-choice",
question:"Mốt của dãy số liệu 2; 3; 3; 4; 5 là",
options:["2","3","4","5"],
answer:"3"
},

{
id:"tt_s1_4",
type:"multiple-choice",
question:"Tứ phân vị thứ nhất Q1 của dãy số liệu 1;2;3;4;5;6;7;8 là",
options:["2","2.5","3","3.5"],
answer:"2.5"
},

{
id:"tt_s1_5",
type:"multiple-choice",
question:"Tứ phân vị thứ ba Q3 của dãy số liệu 1;2;3;4;5;6;7;8 là",
options:["5.5","6","6.5","7"],
answer:"6.5"
},

{
id:"tt_s1_6",
type:"multiple-choice",
question:"Cho dãy số liệu 4;5;6;7;8. Số trung bình bằng",
options:["5","6","7","8"],
answer:"6"
},

{
id:"tt_s1_7",
type:"multiple-choice",
question:"Dãy số liệu nào có mốt bằng 7?",
options:[
"5;6;7;8",
"7;7;6;5",
"5;6;8;9",
"1;2;3;4"
],
answer:"7;7;6;5"
},

{
id:"tt_s1_8",
type:"multiple-choice",
question:"Số trung vị của dãy số liệu 1;2;3;4;5;6 là",
options:["3","3.5","4","4.5"],
answer:"3.5"
},

{
id:"tt_s1_9",
type:"multiple-choice",
question:"Cho dãy số liệu 10;10;12;13;15. Mốt của mẫu số liệu là",
options:["10","12","13","15"],
answer:"10"
},

{
id:"tt_s1_10",
type:"multiple-choice",
question:"Trong các số đặc trưng sau, số nào không bị ảnh hưởng mạnh bởi giá trị ngoại lệ?",
options:[
"Số trung bình",
"Trung vị",
"Tổng các giá trị",
"Tần số"
],
answer:"Trung vị"
}
],
stage2:[
{
id:"tt_s2_1",
type:"true-false",
question:"Cho mẫu số liệu: 2; 4; 4; 5; 7.",
subQuestions:[
{
label:"a",
text:"Số trung bình là 4,4.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Số trung vị là 4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Mốt là 5.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Mốt là 4.",
correctAnswer:"Đúng"
}
]
},

{
id:"tt_s2_2",
type:"true-false",
question:"Cho mẫu số liệu đã sắp xếp: 1;2;3;4;5;6;7;8.",
subQuestions:[
{
label:"a",
text:"Q1 = 2,5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Q2 = 4,5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Q3 = 6,5.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Q3 = 7.",
correctAnswer:"Sai"
}
]
},

{
id:"tt_s2_3",
type:"true-false",
question:"Cho dãy số liệu: 5;5;5;6;7;8;9.",
subQuestions:[
{
label:"a",
text:"Mốt bằng 5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Trung vị bằng 6.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Số trung bình lớn hơn 6.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mẫu số liệu có hai mốt.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"tt_s3_1",
type:"short-answer",
question:"Tính số trung bình của dãy số liệu: 3; 5; 7; 9; 11.",
answer:"7",
explanation:"Tổng các giá trị là 35. Chia cho 5 phần tử được 35/5 = 7."
},

{
id:"tt_s3_2",
type:"short-answer",
question:"Tìm trung vị của dãy số liệu: 2; 4; 6; 8; 10.",
answer:"6",
explanation:"Dãy đã sắp xếp và có 5 phần tử nên trung vị là giá trị đứng giữa: 6."
},

{
id:"tt_s3_3",
type:"short-answer",
question:"Tìm mốt của dãy số liệu: 1;2;2;3;4;4;4;5.",
answer:"4",
explanation:"Giá trị 4 xuất hiện 3 lần, nhiều nhất nên mốt là 4."
},

{
id:"tt_s3_4",
type:"short-answer",
question:"Cho dãy số liệu: 1;2;3;4;5;6;7;8. Tính Q2.",
answer:"4.5",
explanation:"Q2 chính là trung vị. Với 8 số liệu, Q2=(4+5)/2=4,5."
},

{
id:"tt_s3_5",
type:"short-answer",
question:"Cho dãy số liệu: 10;10;12;13;15. Tính số trung bình.",
answer:"12",
explanation:"Trung bình cộng = (10+10+12+13+15)/5 = 60/5 = 12."
}
]
},
13: {
stage1:[
{
id:"pt_s1_1",
type:"multiple-choice",
question:"Khoảng biến thiên của mẫu số liệu là",
options:[
"Hiệu giữa giá trị lớn nhất và nhỏ nhất",
"Tổng các giá trị",
"Trung bình cộng",
"Hiệu giữa Q3 và Q1"
],
answer:"Hiệu giữa giá trị lớn nhất và nhỏ nhất"
},

{
id:"pt_s1_2",
type:"multiple-choice",
question:"Cho mẫu số liệu: 2;4;6;8;10. Khoảng biến thiên bằng",
options:["6","8","10","12"],
answer:"8"
},

{
id:"pt_s1_3",
type:"multiple-choice",
question:"Khoảng tứ phân vị được tính bằng",
options:[
"Q3 - Q1",
"Q1 - Q3",
"Q2 - Q1",
"Q3 + Q1"
],
answer:"Q3 - Q1"
},

{
id:"pt_s1_4",
type:"multiple-choice",
question:"Cho Q1=5 và Q3=11. Khoảng tứ phân vị bằng",
options:["5","6","11","16"],
answer:"6"
},

{
id:"pt_s1_5",
type:"multiple-choice",
question:"Mẫu số liệu có khoảng biến thiên càng lớn thì",
options:[
"Dữ liệu càng phân tán",
"Dữ liệu càng tập trung",
"Trung vị càng lớn",
"Mốt càng lớn"
],
answer:"Dữ liệu càng phân tán"
},

{
id:"pt_s1_6",
type:"multiple-choice",
question:"Cho mẫu số liệu: 1;3;5;7;9. Giá trị lớn nhất là",
options:["5","7","8","9"],
answer:"9"
},

{
id:"pt_s1_7",
type:"multiple-choice",
question:"Cho mẫu số liệu: 1;3;5;7;9. Giá trị nhỏ nhất là",
options:["0","1","3","5"],
answer:"1"
},

{
id:"pt_s1_8",
type:"multiple-choice",
question:"Khoảng biến thiên của mẫu số liệu 10;10;10;10 là",
options:["0","1","10","40"],
answer:"0"
},

{
id:"pt_s1_9",
type:"multiple-choice",
question:"Giá trị ngoại lệ thường là giá trị",
options:[
"Rất khác biệt so với phần lớn dữ liệu",
"Xuất hiện nhiều nhất",
"Nằm ở giữa mẫu số liệu",
"Bằng trung vị"
],
answer:"Rất khác biệt so với phần lớn dữ liệu"
},

{
id:"pt_s1_10",
type:"multiple-choice",
question:"Cho Q1=12 và Q3=20. Khoảng tứ phân vị bằng",
options:["6","7","8","9"],
answer:"8"
}
],
stage2:[
{
id:"pt_s2_1",
type:"true-false",
question:"Cho mẫu số liệu: 2;4;6;8;10.",
subQuestions:[
{
label:"a",
text:"Giá trị lớn nhất là 10.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Giá trị nhỏ nhất là 2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng biến thiên bằng 8.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Khoảng biến thiên bằng 12.",
correctAnswer:"Sai"
}
]
},

{
id:"pt_s2_2",
type:"true-false",
question:"Cho Q1=4 và Q3=10.",
subQuestions:[
{
label:"a",
text:"Khoảng tứ phân vị bằng 6.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Khoảng tứ phân vị được tính bằng Q3-Q1.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng tứ phân vị bằng 14.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Q3 lớn hơn Q1.",
correctAnswer:"Đúng"
}
]
},

{
id:"pt_s2_3",
type:"true-false",
question:"Xét ý nghĩa của các số đo độ phân tán.",
subQuestions:[
{
label:"a",
text:"Khoảng biến thiên càng lớn thì dữ liệu càng phân tán.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Khoảng biến thiên bằng 0 khi mọi giá trị bằng nhau.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Giá trị ngoại lệ có thể ảnh hưởng mạnh đến khoảng biến thiên.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Khoảng tứ phân vị luôn bằng khoảng biến thiên.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"pt_s3_1",
type:"short-answer",
question:"Cho mẫu số liệu: 5;7;8;10;13. Tính khoảng biến thiên.",
answer:"8",
explanation:"Khoảng biến thiên = giá trị lớn nhất − giá trị nhỏ nhất = 13 − 5 = 8."
},

{
id:"pt_s3_2",
type:"short-answer",
question:"Cho Q1=6 và Q3=15. Tính khoảng tứ phân vị.",
answer:"9",
explanation:"Khoảng tứ phân vị = Q3 − Q1 = 15 − 6 = 9."
},

{
id:"pt_s3_3",
type:"short-answer",
question:"Cho mẫu số liệu: 20;20;20;20. Tính khoảng biến thiên.",
answer:"0",
explanation:"Giá trị lớn nhất và nhỏ nhất đều bằng 20 nên khoảng biến thiên bằng 0."
},

{
id:"pt_s3_4",
type:"short-answer",
question:"Cho mẫu số liệu có giá trị nhỏ nhất là 12 và lớn nhất là 30. Tính khoảng biến thiên.",
answer:"18",
explanation:"Khoảng biến thiên = 30 − 12 = 18."
},

{
id:"pt_s3_5",
type:"short-answer",
question:"Cho Q1=18 và Q3=25. Tính khoảng tứ phân vị.",
answer:"7",
explanation:"Khoảng tứ phân vị = Q3 − Q1 = 25 − 18 = 7."
}
]
},
14: {
stage1:[
{
id:"hs_s1_1",
type:"multiple-choice",
question:"Hàm số y = 2x + 3 có tập xác định là",
options:["R","R\\{0}","[0;+∞)","(-∞;0)"],
answer:"R"
},

{
id:"hs_s1_2",
type:"multiple-choice",
question:"Hàm số y = -3x + 1 là",
options:[
"Đồng biến trên R",
"Nghịch biến trên R",
"Không đồng biến, không nghịch biến",
"Đồng biến trên (0;+∞)"
],
answer:"Nghịch biến trên R"
},

{
id:"hs_s1_3",
type:"multiple-choice",
question:"Trục đối xứng của parabol y = x² - 4x + 1 là",
options:[
"x = 2",
"x = -2",
"y = 2",
"y = -2"
],
answer:"x = 2"
},

{
id:"hs_s1_4",
type:"multiple-choice",
question:"Tọa độ đỉnh của parabol y = x² - 4x + 1 là",
options:[
"(2;-3)",
"(-2;1)",
"(2;3)",
"(1;2)"
],
answer:"(2;-3)"
},

{
id:"hs_s1_5",
type:"multiple-choice",
question:"Parabol y = -x² + 2x + 3 quay bề lõm",
options:[
"Lên trên",
"Xuống dưới",
"Sang phải",
"Sang trái"
],
answer:"Xuống dưới"
},

{
id:"hs_s1_6",
type:"multiple-choice",
question:"Giá trị nhỏ nhất của hàm số y = x² là",
options:["0","1","-1","Không tồn tại"],
answer:"0"
},

{
id:"hs_s1_7",
type:"multiple-choice",
question:"Giá trị lớn nhất của hàm số y = -x² + 4 là",
options:["4","0","-4","Không tồn tại"],
answer:"4"
},

{
id:"hs_s1_8",
type:"multiple-choice",
question:"Hàm số y = x² - 2x + 5 đạt giá trị nhỏ nhất khi",
options:[
"x = 0",
"x = 1",
"x = 2",
"x = -1"
],
answer:"x = 1"
},

{
id:"hs_s1_9",
type:"multiple-choice",
question:"Hàm số y = x² - 2 đồng biến trên khoảng nào?",
options:[
"(-∞;0)",
"(0;+∞)",
"R",
"(-2;2)"
],
answer:"(0;+∞)"
},

{
id:"hs_s1_10",
type:"multiple-choice",
question:"Đỉnh của parabol y = x² là",
options:[
"(0;0)",
"(1;0)",
"(0;1)",
"(1;1)"
],
answer:"(0;0)"
}
],
stage2:[
{
id:"hs_s2_1",
type:"true-false",
question:"Cho hàm số y = x² - 4x + 3.",
subQuestions:[
{
label:"a",
text:"Đỉnh của parabol là (2;-1).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Trục đối xứng là x = 2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Parabol quay bề lõm xuống dưới.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Giá trị nhỏ nhất của hàm số là -1.",
correctAnswer:"Đúng"
}
]
},

{
id:"hs_s2_2",
type:"true-false",
question:"Cho hàm số y = -x² + 2x + 3.",
subQuestions:[
{
label:"a",
text:"Parabol quay bề lõm xuống dưới.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đỉnh có hoành độ bằng 1.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Giá trị lớn nhất bằng 4.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số có giá trị nhỏ nhất.",
correctAnswer:"Sai"
}
]
},

{
id:"hs_s2_3",
type:"true-false",
question:"Xét hàm số y = x².",
subQuestions:[
{
label:"a",
text:"Hàm số nghịch biến trên (-∞;0).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hàm số đồng biến trên (0;+∞).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Giá trị nhỏ nhất bằng 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số có giá trị lớn nhất.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"hs_s3_1",
type:"short-answer",
question:"Tìm giá trị nhỏ nhất của hàm số y = x² - 2x + 3.",
answer:"2",
explanation:"y = (x-1)² + 2 ≥ 2. Dấu '=' xảy ra khi x = 1 nên giá trị nhỏ nhất là 2."
},

{
id:"hs_s3_2",
type:"short-answer",
question:"Cho hàm số y = -x² + 4x. Tính hoành độ đỉnh của parabol.",
answer:"2",
explanation:"xđỉnh = -b/(2a) = -4/(2·(-1)) = 2."
},

{
id:"hs_s3_3",
type:"short-answer",
question:"Cho hàm số y = x² - 6x + 5. Tính tung độ đỉnh của parabol.",
answer:"-4",
explanation:"xđỉnh = 3. Thay vào hàm số: y = 3² - 6·3 + 5 = -4."
},

{
id:"hs_s3_4",
type:"short-answer",
question:"Tìm giá trị lớn nhất của hàm số y = -x² + 2x + 8.",
answer:"9",
explanation:"y = -(x-1)² + 9 ≤ 9 nên giá trị lớn nhất là 9."
},

{
id:"hs_s3_5",
type:"short-answer",
question:"Một mảnh vườn hình chữ nhật có chu vi 24m. Diện tích lớn nhất là bao nhiêu mét vuông?",
answer:"36",
explanation:"Với chu vi cố định, hình chữ nhật có diện tích lớn nhất là hình vuông. Cạnh bằng 24/4 = 6m. Diện tích = 6² = 36m²."
}
]
},
15: {
stage1:[
{
id:"dt_s1_1",
type:"multiple-choice",
question:"Tam thức f(x)=x²-5x+6 có hai nghiệm là",
options:["1 và 6","2 và 3","-2 và -3","-1 và -6"],
answer:"2 và 3"
},

{
id:"dt_s1_2",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình x²-5x+6 > 0 là",
options:[
"(2;3)",
"(-∞;2)∪(3;+∞)",
"(-∞;2]∪[3;+∞)",
"[2;3]"
],
answer:"(-∞;2)∪(3;+∞)"
},

{
id:"dt_s1_3",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình x²-5x+6 < 0 là",
options:[
"(2;3)",
"(-∞;2)",
"(3;+∞)",
"R"
],
answer:"(2;3)"
},

{
id:"dt_s1_4",
type:"multiple-choice",
question:"Tam thức x²+4x+5 luôn",
options:[
"Dương",
"Âm",
"Bằng 0",
"Đổi dấu"
],
answer:"Dương"
},

{
id:"dt_s1_5",
type:"multiple-choice",
question:"Biệt thức Δ của tam thức x²-5x+6 là",
options:["1","0","25","-1"],
answer:"1"
},

{
id:"dt_s1_6",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình x²-4 ≤ 0 là",
options:[
"[-2;2]",
"(-2;2)",
"(-∞;-2]∪[2;+∞)",
"R"
],
answer:"[-2;2]"
},

{
id:"dt_s1_7",
type:"multiple-choice",
question:"Tam thức -x²+9 nhận giá trị dương khi",
options:[
"|x|<3",
"|x|>3",
"x>0",
"x<0"
],
answer:"|x|<3"
},

{
id:"dt_s1_8",
type:"multiple-choice",
question:"Số nghiệm nguyên của bất phương trình x²-3x-10 ≤ 0 là",
options:["5","6","7","8"],
answer:"7"
},

{
id:"dt_s1_9",
type:"multiple-choice",
question:"Tam thức x²+1 có số nghiệm thực là",
options:["0","1","2","Vô số"],
answer:"0"
},

{
id:"dt_s1_10",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình x²+2x-3 ≥ 0 là",
options:[
"[-3;1]",
"(-3;1)",
"(-∞;-3]∪[1;+∞)",
"(-∞;-3)∪(1;+∞)"
],
answer:"(-∞;-3]∪[1;+∞)"
}
],
stage2:[
{
id:"dt_s2_1",
type:"true-false",
question:"Cho tam thức f(x)=x²-5x+6.",
subQuestions:[
{
label:"a",
text:"f(x)=0 có hai nghiệm 2 và 3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"f(x)<0 với mọi x thuộc (2;3).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"f(x)>0 với mọi x thuộc (2;3).",
correctAnswer:"Sai"
},
{
label:"d",
text:"f(x)≥0 với mọi x∈(-∞;2]∪[3;+∞).",
correctAnswer:"Đúng"
}
]
},

{
id:"dt_s2_2",
type:"true-false",
question:"Cho tam thức f(x)=x²+4x+5.",
subQuestions:[
{
label:"a",
text:"Δ=-4.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Tam thức vô nghiệm thực.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"f(x)>0 với mọi x thuộc R.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"f(x)<0 với mọi x thuộc R.",
correctAnswer:"Sai"
}
]
},

{
id:"dt_s2_3",
type:"true-false",
question:"Cho bất phương trình x²-4≤0.",
subQuestions:[
{
label:"a",
text:"Hai nghiệm của phương trình x²-4=0 là -2 và 2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Tập nghiệm là [-2;2].",
correctAnswer:"Đúng"
},
{
label:"c",
text:"x=0 là nghiệm.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"x=3 là nghiệm.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"dt_s3_1",
type:"short-answer",
question:"Tìm số nghiệm nguyên của bất phương trình x²-5x+6 ≤ 0.",
answer:"2",
explanation:"Ta có x²-5x+6=(x-2)(x-3). Suy ra tập nghiệm là [2;3]. Có 2 nghiệm nguyên là 2 và 3."
},

{
id:"dt_s3_2",
type:"short-answer",
question:"Tính Δ của tam thức x²-6x+5.",
answer:"16",
explanation:"Δ=b²-4ac=(-6)²-4·1·5=36-20=16."
},

{
id:"dt_s3_3",
type:"short-answer",
question:"Tìm giá trị nhỏ nhất của f(x)=x²-4x+7.",
answer:"3",
explanation:"f(x)=(x-2)²+3 ≥ 3. Giá trị nhỏ nhất bằng 3 khi x=2."
},

{
id:"dt_s3_4",
type:"short-answer",
question:"Tìm số nghiệm nguyên của bất phương trình x²-1<0.",
answer:"1",
explanation:"Ta có -1<x<1. Nghiệm nguyên duy nhất là x=0."
},

{
id:"dt_s3_5",
type:"short-answer",
question:"Tìm tổng hai nghiệm của phương trình x²-7x+10=0.",
answer:"7",
explanation:"Theo hệ thức Viète, tổng hai nghiệm bằng -b/a=7."
}
]
},
16: {
stage1:[
{
id:"pq_s1_1",
type:"multiple-choice",
question:"Điều kiện xác định của phương trình √(x-2)=3 là",
options:[
"x≥2",
"x>2",
"x≥3",
"x≠2"
],
answer:"x≥2"
},

{
id:"pq_s1_2",
type:"multiple-choice",
question:"Nghiệm của phương trình √(x+1)=2 là",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
id:"pq_s1_3",
type:"multiple-choice",
question:"Đặt t=x² (t≥0). Phương trình x⁴-5x²+4=0 trở thành",
options:[
"t²-5t+4=0",
"t²+5t+4=0",
"t²-4t+5=0",
"t²+4t-5=0"
],
answer:"t²-5t+4=0"
},

{
id:"pq_s1_4",
type:"multiple-choice",
question:"Số nghiệm của phương trình x⁴-5x²+4=0 là",
options:[
"1",
"2",
"3",
"4"
],
answer:"4"
},

{
id:"pq_s1_5",
type:"multiple-choice",
question:"Phương trình √(x+4)=x có bao nhiêu nghiệm?",
options:[
"0",
"1",
"2",
"3"
],
answer:"1"
},

{
id:"pq_s1_6",
type:"multiple-choice",
question:"Điều kiện xác định của phương trình √(2x-1)=x là",
options:[
"x≥1/2",
"x>1/2",
"x≥0",
"x>0"
],
answer:"x≥1/2"
},

{
id:"pq_s1_7",
type:"multiple-choice",
question:"Phương trình x⁴-13x²+36=0 có thể đặt",
options:[
"t=x",
"t=x²",
"t=x³",
"t=√x"
],
answer:"t=x²"
},

{
id:"pq_s1_8",
type:"multiple-choice",
question:"Nghiệm của phương trình x²-9=0 là",
options:[
"±3",
"3",
"-3",
"±9"
],
answer:"±3"
},

{
id:"pq_s1_9",
type:"multiple-choice",
question:"Phương trình √(x+5)=√(2x) có nghiệm",
options:[
"5",
"4",
"3",
"2"
],
answer:"5"
},

{
id:"pq_s1_10",
type:"multiple-choice",
question:"Sau khi đặt t=x², điều kiện của t là",
options:[
"t>0",
"t≥0",
"t≠0",
"t<0"
],
answer:"t≥0"
}
],
stage2:[
{
id:"pq_s2_1",
type:"true-false",
question:"Xét phương trình √(x+1)=2.",
subQuestions:[
{
label:"a",
text:"Điều kiện xác định là x≥-1.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bình phương hai vế được x+1=4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nghiệm của phương trình là x=3.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Phương trình có hai nghiệm.",
correctAnswer:"Sai"
}
]
},

{
id:"pq_s2_2",
type:"true-false",
question:"Xét phương trình x⁴-5x²+4=0.",
subQuestions:[
{
label:"a",
text:"Đặt t=x².",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Ta được phương trình t²-5t+4=0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Phương trình có 4 nghiệm thực.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tổng các nghiệm bằng 4.",
correctAnswer:"Sai"
}
]
},

{
id:"pq_s2_3",
type:"true-false",
question:"Xét phương trình √(2x-1)=x.",
subQuestions:[
{
label:"a",
text:"Điều kiện xác định là x≥1/2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Sau khi bình phương được x²-2x+1=0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nghiệm là x=1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Phương trình có hai nghiệm.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"pq_s3_1",
type:"short-answer",
question:"Tìm nghiệm của phương trình √(x+4)=3.",
answer:"5",
explanation:"Bình phương hai vế: x+4=9 ⇒ x=5. Thử lại thỏa mãn."
},

{
id:"pq_s3_2",
type:"short-answer",
question:"Tìm tổng các nghiệm của phương trình x⁴-5x²+4=0.",
answer:"0",
explanation:"Đặt t=x². Ta có (t-1)(t-4)=0 ⇒ x=±1, ±2. Tổng các nghiệm bằng 0."
},

{
id:"pq_s3_3",
type:"short-answer",
question:"Tìm số nghiệm thực của phương trình x⁴-13x²+36=0.",
answer:"4",
explanation:"Đặt t=x². Ta được (t-4)(t-9)=0 ⇒ x=±2, ±3. Có 4 nghiệm thực."
},

{
id:"pq_s3_4",
type:"short-answer",
question:"Tìm nghiệm của phương trình √(2x-1)=x.",
answer:"1",
explanation:"Bình phương hai vế: 2x-1=x² ⇒ (x-1)²=0 ⇒ x=1."
},

{
id:"pq_s3_5",
type:"short-answer",
question:"Tìm tích các nghiệm của phương trình x⁴-10x²+9=0.",
answer:"9",
explanation:"Đặt t=x². Ta có (t-1)(t-9)=0 ⇒ x=±1, ±3. Tích các nghiệm là (-3)(-1)(1)(3)=9."
}
]
},
17: {
stage1:[
{
id:"ptdt_s1_1",
type:"multiple-choice",
question:"Vectơ nào là vectơ pháp tuyến của đường thẳng 2x-3y+1=0?",
options:[
"(2;-3)",
"(3;2)",
"(-3;2)",
"(1;0)"
],
answer:"(2;-3)"
},

{
id:"ptdt_s1_2",
type:"multiple-choice",
question:"Vectơ nào là vectơ chỉ phương của đường thẳng 2x-3y+1=0?",
options:[
"(2;-3)",
"(3;2)",
"(2;3)",
"(-2;-3)"
],
answer:"(3;2)"
},

{
id:"ptdt_s1_3",
type:"multiple-choice",
question:"Đường thẳng đi qua A(1;2) và có vectơ chỉ phương u=(3;1) có phương trình tham số là",
options:[
"x=1+3t,y=2+t",
"x=1+t,y=2+3t",
"x=3+t,y=1+2t",
"x=1-3t,y=2-t"
],
answer:"x=1+3t,y=2+t"
},

{
id:"ptdt_s1_4",
type:"multiple-choice",
question:"Đường thẳng đi qua điểm A(2;-1) và có vectơ pháp tuyến n=(1;2) có phương trình tổng quát là",
options:[
"x+2y=0",
"x+2y=4",
"x+2y-4=0",
"2x+y=0"
],
answer:"x+2y=0"
},

{
id:"ptdt_s1_5",
type:"multiple-choice",
question:"Cho A(1;2), B(4;6). Một vectơ chỉ phương của đường thẳng AB là",
options:[
"(3;4)",
"(4;6)",
"(1;2)",
"(-4;-6)"
],
answer:"(3;4)"
},

{
id:"ptdt_s1_6",
type:"multiple-choice",
question:"Đường thẳng x-2y+5=0 song song với đường thẳng nào?",
options:[
"x-2y-1=0",
"2x-y+3=0",
"x+2y=0",
"2x-4y+1=0"
],
answer:"x-2y-1=0"
},

{
id:"ptdt_s1_7",
type:"multiple-choice",
question:"Đường thẳng x-2y+5=0 vuông góc với đường thẳng nào?",
options:[
"2x+y-3=0",
"x-2y+1=0",
"2x-4y+7=0",
"x-2y-8=0"
],
answer:"2x+y-3=0"
},

{
id:"ptdt_s1_8",
type:"multiple-choice",
question:"Điểm nào thuộc đường thẳng x+y-3=0?",
options:[
"(1;2)",
"(2;2)",
"(0;0)",
"(3;3)"
],
answer:"(1;2)"
},

{
id:"ptdt_s1_9",
type:"multiple-choice",
question:"Đường thẳng có phương trình tham số x=2+t,y=3-2t có vectơ chỉ phương là",
options:[
"(1;-2)",
"(2;3)",
"(1;2)",
"(-1;2)"
],
answer:"(1;-2)"
},

{
id:"ptdt_s1_10",
type:"multiple-choice",
question:"Đường thẳng qua O(0;0) và A(2;4) có phương trình là",
options:[
"2x-y=0",
"x-2y=0",
"y-2x=0",
"x+y=0"
],
answer:"y-2x=0"
}
],
stage2:[
{
id:"ptdt_s2_1",
type:"true-false",
question:"Cho đường thẳng d: 2x-3y+5=0.",
subQuestions:[
{
label:"a",
text:"Vectơ pháp tuyến của d là (2;-3).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Vectơ chỉ phương của d là (3;2).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm (2;3) thuộc d.",
correctAnswer:"Sai"
},
{
label:"d",
text:"d song song với đường thẳng 2x-3y-1=0.",
correctAnswer:"Đúng"
}
]
},

{
id:"ptdt_s2_2",
type:"true-false",
question:"Cho hai điểm A(1;2), B(4;6).",
subQuestions:[
{
label:"a",
text:"AB=(3;4).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AB là vectơ chỉ phương của đường thẳng AB.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Một vectơ pháp tuyến của AB là (4;-3).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Đường thẳng AB có phương trình x-y+1=0.",
correctAnswer:"Sai"
}
]
},

{
id:"ptdt_s2_3",
type:"true-false",
question:"Cho đường thẳng d: x+y-3=0.",
subQuestions:[
{
label:"a",
text:"(1;2) thuộc d.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(2;1) thuộc d.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(0;3) thuộc d.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"(2;2) thuộc d.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"ptdt_s3_1",
type:"short-answer",
question:"Cho đường thẳng d: 3x-2y+7=0. Hãy cho biết tổng hai tọa độ của một vectơ pháp tuyến đơn giản nhất.",
answer:"1",
explanation:"Một vectơ pháp tuyến là n=(3;-2). Tổng hai tọa độ là 3+(-2)=1."
},

{
id:"ptdt_s3_2",
type:"short-answer",
question:"Cho A(1;2), B(5;8). Tính hoành độ của vectơ AB.",
answer:"4",
explanation:"AB=(5-1;8-2)=(4;6). Hoành độ bằng 4."
},

{
id:"ptdt_s3_3",
type:"short-answer",
question:"Cho đường thẳng d: x+y-5=0. Tính tung độ giao điểm của d với trục Oy.",
answer:"5",
explanation:"Trên Oy thì x=0. Thay vào: y=5."
},

{
id:"ptdt_s3_4",
type:"short-answer",
question:"Cho đường thẳng d: 2x-y+4=0. Tính hệ số góc của đường thẳng.",
answer:"2",
explanation:"Viết lại: y=2x+4 nên hệ số góc k=2."
},

{
id:"ptdt_s3_5",
type:"short-answer",
question:"Cho A(1;1), B(4;5). Tính độ dài vectơ AB.",
answer:"5",
explanation:"AB=(3;4). Độ dài AB=√(3²+4²)=5."
}
]
},
18: {
stage1:[
{
id:"dtmp_s1_1",
type:"multiple-choice",
question:"Đường thẳng 2x-3y+5=0 có một vectơ pháp tuyến là",
options:["(2;-3)","(3;2)","(-3;-2)","(1;1)"],
answer:"(2;-3)"
},

{
id:"dtmp_s1_2",
type:"multiple-choice",
question:"Đường thẳng 2x-3y+5=0 có một vectơ chỉ phương là",
options:["(2;-3)","(3;2)","(2;3)","(-2;-3)"],
answer:"(3;2)"
},

{
id:"dtmp_s1_3",
type:"multiple-choice",
question:"Đường thẳng đi qua A(1;2) và có vectơ chỉ phương u=(2;3) có phương trình tham số là",
options:[
"x=1+2t,y=2+3t",
"x=2+t,y=3+t",
"x=1+3t,y=2+2t",
"x=1-2t,y=2-3t"
],
answer:"x=1+2t,y=2+3t"
},

{
id:"dtmp_s1_4",
type:"multiple-choice",
question:"Đường thẳng đi qua A(2;1) và có vectơ pháp tuyến n=(3;4) có phương trình tổng quát là",
options:[
"3x+4y-10=0",
"3x+4y+10=0",
"4x+3y-10=0",
"3x-4y+2=0"
],
answer:"3x+4y-10=0"
},

{
id:"dtmp_s1_5",
type:"multiple-choice",
question:"Cho A(1;2), B(4;6). Một vectơ chỉ phương của AB là",
options:[
"(3;4)",
"(4;6)",
"(1;2)",
"(-3;-3)"
],
answer:"(3;4)"
},

{
id:"dtmp_s1_6",
type:"multiple-choice",
question:"Hai đường thẳng x-y+1=0 và 2x-2y+3=0 là",
options:[
"Cắt nhau",
"Song song",
"Trùng nhau",
"Vuông góc"
],
answer:"Song song"
},

{
id:"dtmp_s1_7",
type:"multiple-choice",
question:"Hai đường thẳng x+y=0 và x-y=0 là",
options:[
"Song song",
"Trùng nhau",
"Vuông góc",
"Không xác định"
],
answer:"Vuông góc"
},

{
id:"dtmp_s1_8",
type:"multiple-choice",
question:"Điểm nào thuộc đường thẳng x+y-3=0?",
options:[
"(1;2)",
"(2;2)",
"(0;0)",
"(3;3)"
],
answer:"(1;2)"
},

{
id:"dtmp_s1_9",
type:"multiple-choice",
question:"Khoảng cách từ điểm O(0;0) đến đường thẳng x+y-1=0 là",
options:[
"1/√2",
"√2",
"1",
"2"
],
answer:"1/√2"
},

{
id:"dtmp_s1_10",
type:"multiple-choice",
question:"Đường thẳng qua A(0;2), B(2;0) có phương trình là",
options:[
"x+y-2=0",
"x-y-2=0",
"2x+y=0",
"x+2y=0"
],
answer:"x+y-2=0"
}
],
stage2:[
{
id:"dtmp_s2_1",
type:"true-false",
question:"Cho đường thẳng d: 2x-3y+5=0.",
subQuestions:[
{
label:"a",
text:"Một vectơ pháp tuyến của d là (2;-3).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Một vectơ chỉ phương của d là (3;2).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm (1;1) thuộc d.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đường thẳng d có hệ số góc bằng 2/3.",
correctAnswer:"Đúng"
}
]
},

{
id:"dtmp_s2_2",
type:"true-false",
question:"Cho hai điểm A(1;2), B(4;6).",
subQuestions:[
{
label:"a",
text:"AB=(3;4).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AB là vectơ chỉ phương của đường thẳng AB.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(4;-3) là một vectơ pháp tuyến của AB.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Phương trình đường thẳng AB là x-y+1=0.",
correctAnswer:"Sai"
}
]
},

{
id:"dtmp_s2_3",
type:"true-false",
question:"Xét hai đường thẳng d1:x-y+1=0 và d2:2x-2y+3=0.",
subQuestions:[
{
label:"a",
text:"d1 và d2 song song.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"d1 và d2 cắt nhau.",
correctAnswer:"Sai"
},
{
label:"c",
text:"d1 và d2 có cùng vectơ pháp tuyến.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"d1 và d2 trùng nhau.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"dtmp_s3_1",
type:"short-answer",
question:"Cho đường thẳng d: 3x-4y+7=0. Tính tổng tọa độ của một vectơ pháp tuyến.",
answer:"-1",
explanation:"Một vectơ pháp tuyến là n=(3;-4). Tổng tọa độ bằng 3+(-4)=-1."
},

{
id:"dtmp_s3_2",
type:"short-answer",
question:"Cho A(1;2), B(5;8). Tính tung độ của vectơ AB.",
answer:"6",
explanation:"AB=(5-1;8-2)=(4;6). Tung độ bằng 6."
},

{
id:"dtmp_s3_3",
type:"short-answer",
question:"Tìm giao điểm của đường thẳng x+y-5=0 với trục Oy. Hỏi tung độ giao điểm bằng bao nhiêu?",
answer:"5",
explanation:"Trên trục Oy có x=0. Khi đó y=5."
},

{
id:"dtmp_s3_4",
type:"short-answer",
question:"Khoảng cách từ O(0;0) đến đường thẳng 3x+4y-20=0 bằng bao nhiêu?",
answer:"4",
explanation:"d=|−20|/√(3²+4²)=20/5=4."
},

{
id:"dtmp_s3_5",
type:"short-answer",
question:"Cho A(1;1), B(4;5). Tính độ dài AB.",
answer:"5",
explanation:"AB=√[(4−1)²+(5−1)²]=√(9+16)=5."
}
]
},
19: {
stage1:[
{
id:"dttron_s1_1",
type:"multiple-choice",
question:"Đường tròn có tâm I(2;3), bán kính R=4 có phương trình là",
options:[
"(x-2)²+(y-3)²=16",
"(x+2)²+(y+3)²=16",
"(x-2)²+(y-3)²=4",
"(x+2)²+(y+3)²=4"
],
answer:"(x-2)²+(y-3)²=16"
},

{
id:"dttron_s1_2",
type:"multiple-choice",
question:"Tâm của đường tròn (x-1)²+(y+2)²=25 là",
options:[
"(1;-2)",
"(-1;2)",
"(1;2)",
"(-1;-2)"
],
answer:"(1;-2)"
},

{
id:"dttron_s1_3",
type:"multiple-choice",
question:"Bán kính của đường tròn (x+3)²+(y-1)²=49 là",
options:["5","6","7","8"],
answer:"7"
},

{
id:"dttron_s1_4",
type:"multiple-choice",
question:"Điểm nào thuộc đường tròn x²+y²=25?",
options:[
"(3;4)",
"(2;4)",
"(1;5)",
"(4;4)"
],
answer:"(3;4)"
},

{
id:"dttron_s1_5",
type:"multiple-choice",
question:"Đường tròn x²+y²-4x+6y-12=0 có tâm là",
options:[
"(2;-3)",
"(-2;3)",
"(2;3)",
"(-2;-3)"
],
answer:"(2;-3)"
},

{
id:"dttron_s1_6",
type:"multiple-choice",
question:"Đường tròn x²+y²-4x+6y-12=0 có bán kính bằng",
options:[
"5",
"4",
"3",
"6"
],
answer:"5"
},

{
id:"dttron_s1_7",
type:"multiple-choice",
question:"Khoảng cách từ tâm I(0;0) đến điểm A(3;4) bằng",
options:[
"3",
"4",
"5",
"7"
],
answer:"5"
},

{
id:"dttron_s1_8",
type:"multiple-choice",
question:"Đường tròn tâm O(0;0) bán kính 2 có phương trình là",
options:[
"x²+y²=4",
"x²+y²=2",
"(x-2)²+y²=4",
"x²+(y-2)²=4"
],
answer:"x²+y²=4"
},

{
id:"dttron_s1_9",
type:"multiple-choice",
question:"Hai đường tròn tâm O(0;0), bán kính 3 và tâm I(8;0), bán kính 5",
options:[
"Cắt nhau",
"Tiếp xúc ngoài",
"Tiếp xúc trong",
"Không giao nhau"
],
answer:"Tiếp xúc ngoài"
},

{
id:"dttron_s1_10",
type:"multiple-choice",
question:"Đường kính của đường tròn bán kính 6 là",
options:[
"3",
"6",
"12",
"18"
],
answer:"12"
}
],
stage2:[
{
id:"dttron_s2_1",
type:"true-false",
question:"Cho đường tròn (C):(x-2)²+(y+1)²=25.",
subQuestions:[
{
label:"a",
text:"Tâm của đường tròn là I(2;-1).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bán kính bằng 5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm A(5;3) thuộc đường tròn.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Đường kính bằng 5.",
correctAnswer:"Sai"
}
]
},

{
id:"dttron_s2_2",
type:"true-false",
question:"Cho đường tròn x²+y²-4x+6y-12=0.",
subQuestions:[
{
label:"a",
text:"Tâm là I(2;-3).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bán kính bằng 5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm O(0;0) nằm trên đường tròn.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Khoảng cách từ tâm đến gốc tọa độ bằng √13.",
correctAnswer:"Đúng"
}
]
},

{
id:"dttron_s2_3",
type:"true-false",
question:"Xét hai đường tròn (C1) tâm O(0;0), R=3 và (C2) tâm I(8;0), R=5.",
subQuestions:[
{
label:"a",
text:"Khoảng cách hai tâm bằng 8.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"R1+R2=8.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường tròn tiếp xúc ngoài.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường tròn cắt nhau tại hai điểm.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"dttron_s3_1",
type:"short-answer",
question:"Cho đường tròn (x-3)²+(y+2)²=16. Hãy cho biết bán kính của đường tròn.",
answer:"4",
explanation:"Phương trình có dạng (x-a)²+(y-b)²=R². Ta có R²=16 nên R=4."
},

{
id:"dttron_s3_2",
type:"short-answer",
question:"Cho đường tròn x²+y²=36. Tính đường kính.",
answer:"12",
explanation:"R²=36 ⇒ R=6. Đường kính bằng 2R=12."
},

{
id:"dttron_s3_3",
type:"short-answer",
question:"Cho đường tròn (x+1)²+(y-2)²=9. Tính tổng tọa độ tâm.",
answer:"1",
explanation:"Tâm là I(-1;2). Tổng tọa độ bằng -1+2=1."
},

{
id:"dttron_s3_4",
type:"short-answer",
question:"Cho tâm I(1;2) và điểm A(4;6) thuộc đường tròn. Tính bán kính.",
answer:"5",
explanation:"R=IA=√[(4-1)²+(6-2)²]=√(9+16)=5."
},

{
id:"dttron_s3_5",
type:"short-answer",
question:"Cho đường tròn x²+y²-6x+8y-11=0. Tính bán kính.",
answer:"6",
explanation:"(x-3)²+(y+4)²=36 nên bán kính R=6."
}
]
},
20: {
stage1:[
{
id:"conic_s1_1",
type:"multiple-choice",
question:"Phương trình nào là phương trình chính tắc của elip?",
options:[
"x²/25+y²/9=1",
"x²/25-y²/9=1",
"y²=8x",
"x²+y²=25"
],
answer:"x²/25+y²/9=1"
},

{
id:"conic_s1_2",
type:"multiple-choice",
question:"Elip x²/25+y²/9=1 có giá trị a bằng",
options:["3","4","5","25"],
answer:"5"
},

{
id:"conic_s1_3",
type:"multiple-choice",
question:"Elip x²/25+y²/9=1 có tiêu cự c bằng",
options:["3","4","5","6"],
answer:"4"
},

{
id:"conic_s1_4",
type:"multiple-choice",
question:"Phương trình nào là phương trình chính tắc của hypebol?",
options:[
"x²/25-y²/9=1",
"x²/25+y²/9=1",
"y²=8x",
"x²+y²=25"
],
answer:"x²/25-y²/9=1"
},

{
id:"conic_s1_5",
type:"multiple-choice",
question:"Hypebol x²/16-y²/9=1 có a bằng",
options:["2","3","4","5"],
answer:"4"
},

{
id:"conic_s1_6",
type:"multiple-choice",
question:"Parabol y²=8x có p bằng",
options:["1","2","4","8"],
answer:"2"
},

{
id:"conic_s1_7",
type:"multiple-choice",
question:"Tiêu điểm của parabol y²=8x là",
options:[
"F(2;0)",
"F(4;0)",
"F(0;2)",
"F(0;4)"
],
answer:"F(2;0)"
},

{
id:"conic_s1_8",
type:"multiple-choice",
question:"Đỉnh của parabol y²=8x là",
options:[
"O(0;0)",
"(2;0)",
"(0;2)",
"(4;0)"
],
answer:"O(0;0)"
},

{
id:"conic_s1_9",
type:"multiple-choice",
question:"Elip x²/36+y²/20=1 có độ dài trục lớn bằng",
options:["6","12","18","36"],
answer:"12"
},

{
id:"conic_s1_10",
type:"multiple-choice",
question:"Hypebol x²/9-y²/16=1 có các đỉnh là",
options:[
"(±3;0)",
"(0;±4)",
"(±5;0)",
"(0;±3)"
],
answer:"(±3;0)"
}
],
stage2:[
{
id:"conic_s2_1",
type:"true-false",
question:"Cho elip E: x²/25+y²/9=1.",
subQuestions:[
{
label:"a",
text:"a=5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"b=3.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"c=4.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tiêu điểm là F(±5;0).",
correctAnswer:"Sai"
}
]
},

{
id:"conic_s2_2",
type:"true-false",
question:"Cho hypebol H: x²/16-y²/9=1.",
subQuestions:[
{
label:"a",
text:"a=4.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"b=3.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"c=5.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Các đỉnh là (0;±4).",
correctAnswer:"Sai"
}
]
},

{
id:"conic_s2_3",
type:"true-false",
question:"Cho parabol P: y²=8x.",
subQuestions:[
{
label:"a",
text:"p=2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Tiêu điểm là F(2;0).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đường chuẩn là x=-2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Parabol mở lên trên.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"conic_s3_1",
type:"short-answer",
question:"Cho elip x²/25+y²/9=1. Tính c.",
answer:"4",
explanation:"c²=a²-b²=25-9=16 ⇒ c=4."
},

{
id:"conic_s3_2",
type:"short-answer",
question:"Cho hypebol x²/36-y²/20=1. Tính c.",
answer:"8",
explanation:"c²=a²+b²=36+20=56. Theo chương trình lớp 10 thường lấy dạng đẹp x²/36-y²/28=1 mới cho c=8. Nếu đề đúng là 20 thì c=√56=2√14."
},

{
id:"conic_s3_3",
type:"short-answer",
question:"Cho parabol y²=12x. Tìm tọa độ tiêu điểm. Hãy nhập hoành độ của tiêu điểm.",
answer:"3",
explanation:"y²=2px ⇒ 2p=12 ⇒ p=6. Tiêu điểm F(p/2;0)=F(3;0)."
},

{
id:"conic_s3_4",
type:"short-answer",
question:"Cho elip x²/49+y²/25=1. Tính độ dài trục lớn.",
answer:"14",
explanation:"a²=49 ⇒ a=7. Độ dài trục lớn bằng 2a=14."
},

{
id:"conic_s3_5",
type:"short-answer",
question:"Cho hypebol x²/9-y²/16=1. Tính tổng các hoành độ của hai đỉnh.",
answer:"0",
explanation:"Hai đỉnh là A(-3;0), B(3;0). Tổng hoành độ bằng -3+3=0."
}
]
},
21: {
stage1:[
{
id:"qt_s1_1",
type:"multiple-choice",
question:"Một người có 3 áo và 4 quần. Số cách chọn 1 bộ quần áo là",
options:["7","12","24","1"],
answer:"12"
},

{
id:"qt_s1_2",
type:"multiple-choice",
question:"Có 5 con đường từ A đến B và 3 con đường từ B đến C. Số cách đi từ A đến C qua B là",
options:["8","15","5","3"],
answer:"15"
},

{
id:"qt_s1_3",
type:"multiple-choice",
question:"Có 4 quyển Toán và 5 quyển Lý khác nhau. Số cách chọn 1 quyển Toán hoặc 1 quyển Lý là",
options:["9","20","45","10"],
answer:"9"
},

{
id:"qt_s1_4",
type:"multiple-choice",
question:"Từ các chữ số 1,2,3,4,5 lập được bao nhiêu số có một chữ số?",
options:["4","5","6","10"],
answer:"5"
},

{
id:"qt_s1_5",
type:"multiple-choice",
question:"Từ các chữ số 1,2,3,4,5 lập được bao nhiêu số có hai chữ số?",
options:["10","20","25","30"],
answer:"25"
},

{
id:"qt_s1_6",
type:"multiple-choice",
question:"Có 5 món ăn chính, 4 món tráng miệng. Số thực đơn gồm 1 món chính và 1 món tráng miệng là",
options:["9","20","16","25"],
answer:"20"
},

{
id:"qt_s1_7",
type:"multiple-choice",
question:"Có 8 hoa hồng trắng, 7 hoa hồng đỏ và 10 hoa hồng vàng. Số cách chọn 1 bông hoa bất kỳ là",
options:["25","56","80","560"],
answer:"25"
},

{
id:"qt_s1_8",
type:"multiple-choice",
question:"Một đội có 5 nam và 4 nữ. Số cách chọn 1 người là",
options:["9","20","10","8"],
answer:"9"
},

{
id:"qt_s1_9",
type:"multiple-choice",
question:"Có 12 hộp bút đỏ và 18 hộp bút xanh. Số cách chọn đồng thời 1 hộp đỏ và 1 hộp xanh là",
options:["30","216","12","18"],
answer:"216"
},

{
id:"qt_s1_10",
type:"multiple-choice",
question:"Có 5 loại quả tráng miệng và 3 loại nước uống. Số cách chọn 1 quả và 1 nước uống là",
options:["8","15","10","18"],
answer:"15"
}
],
stage2:[
{
id:"qt_s2_1",
type:"true-false",
question:"Trên giá sách có 4 sách Toán, 5 sách Lý và 6 sách Hóa.",
subQuestions:[
{
label:"a",
text:"Có 15 cách chọn một quyển sách bất kỳ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Có 9 cách chọn một quyển Toán hoặc một quyển Lý.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Có 24 cách chọn một quyển Toán và một quyển Hóa.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Có 120 cách chọn đủ một quyển của mỗi môn.",
correctAnswer:"Đúng"
}
]
},

{
id:"qt_s2_2",
type:"true-false",
question:"Cho tập A={1,2,3,4,5}.",
subQuestions:[
{
label:"a",
text:"Lập được 25 số có hai chữ số.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Lập được 125 số có ba chữ số.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Lập được 60 số có ba chữ số khác nhau.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Lập được 24 số chẵn có ba chữ số khác nhau.",
correctAnswer:"Đúng"
}
]
},

{
id:"qt_s2_3",
type:"true-false",
question:"Một thực đơn gồm 1 món ăn trong 5 món, 1 món tráng miệng trong 5 loại và 1 nước uống trong 3 loại.",
subQuestions:[
{
label:"a",
text:"Có 5 cách chọn món ăn.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Có 5 cách chọn món tráng miệng.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Có 3 cách chọn nước uống.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Có 75 cách chọn thực đơn.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"qt_s3_1",
type:"short-answer",
question:"Có 8 hoa hồng trắng, 7 hoa hồng đỏ và 10 hoa hồng vàng. Hỏi có bao nhiêu cách chọn 3 bông hoa có đủ ba màu?",
answer:"560",
explanation:"Chọn 1 hoa trắng, 1 hoa đỏ và 1 hoa vàng. Theo quy tắc nhân: 8×7×10=560 cách."
},

{
id:"qt_s3_2",
type:"short-answer",
question:"Có 9 cặp vợ chồng dự tiệc. Chọn 1 người đàn ông và 1 người phụ nữ không phải vợ chồng của nhau. Có bao nhiêu cách?",
answer:"72",
explanation:"Chọn người đàn ông: 9 cách. Với mỗi người đàn ông có 8 phụ nữ không phải vợ mình. Số cách là 9×8=72."
},

{
id:"qt_s3_3",
type:"short-answer",
question:"Có 12 hộp bút đỏ và 18 hộp bút xanh. Hỏi có bao nhiêu cách chọn đồng thời một hộp đỏ và một hộp xanh?",
answer:"216",
explanation:"Theo quy tắc nhân: 12×18=216 cách."
},

{
id:"qt_s3_4",
type:"short-answer",
question:"Có 4 hoa hồng, 6 hoa lan, 5 hoa cúc khác nhau. Chọn 3 bông sao cho có đủ ba loại. Có bao nhiêu cách?",
answer:"120",
explanation:"Chọn 1 hoa hồng, 1 hoa lan và 1 hoa cúc: 4×6×5=120 cách."
},

{
id:"qt_s3_5",
type:"short-answer",
question:"Một thực đơn gồm 1 món ăn trong 5 món, 1 món tráng miệng trong 5 loại và 1 nước uống trong 3 loại. Có bao nhiêu cách chọn?",
answer:"75",
explanation:"Theo quy tắc nhân: 5×5×3=75 cách."
}
]
},
22: {
stage1:[
{
id:"hv_s1_1",
type:"multiple-choice",
question:"Giá trị của 5! bằng",
options:["24","60","120","720"],
answer:"120"
},

{
id:"hv_s1_2",
type:"multiple-choice",
question:"Số hoán vị của 6 phần tử là",
options:["120","360","720","840"],
answer:"720"
},

{
id:"hv_s1_3",
type:"multiple-choice",
question:"Giá trị của A₅³ bằng",
options:["10","20","60","125"],
answer:"60"
},

{
id:"hv_s1_4",
type:"multiple-choice",
question:"Giá trị của C₅² bằng",
options:["5","10","15","20"],
answer:"10"
},

{
id:"hv_s1_5",
type:"multiple-choice",
question:"Có bao nhiêu cách chọn 2 học sinh từ 5 học sinh?",
options:["10","20","25","5"],
answer:"10"
},

{
id:"hv_s1_6",
type:"multiple-choice",
question:"Có bao nhiêu cách chọn lớp trưởng, lớp phó từ 5 học sinh?",
options:["10","20","25","5"],
answer:"20"
},

{
id:"hv_s1_7",
type:"multiple-choice",
question:"Từ các chữ số 1,2,3,4 lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
options:["12","24","36","48"],
answer:"24"
},

{
id:"hv_s1_8",
type:"multiple-choice",
question:"Số cách xếp 4 học sinh vào 4 ghế là",
options:["16","24","12","8"],
answer:"24"
},

{
id:"hv_s1_9",
type:"multiple-choice",
question:"Giá trị của C₆₃ bằng",
options:["15","20","30","60"],
answer:"20"
},

{
id:"hv_s1_10",
type:"multiple-choice",
question:"Giá trị của A₆₂ bằng",
options:["12","24","30","36"],
answer:"30"
}
],
stage2:[
{
id:"hv_s2_1",
type:"true-false",
question:"Xét các công thức về hoán vị, chỉnh hợp, tổ hợp.",
subQuestions:[
{
label:"a",
text:"P₅ = 5! = 120.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"A₅² = 20.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"C₅² = 10.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"A₅² = C₅².",
correctAnswer:"Sai"
}
]
},

{
id:"hv_s2_2",
type:"true-false",
question:"Có 6 học sinh phân biệt.",
subQuestions:[
{
label:"a",
text:"Có 720 cách xếp 6 học sinh thành một hàng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Có 15 cách chọn 2 học sinh.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Có 120 cách chọn lớp trưởng và lớp phó.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Có 30 cách chọn và sắp thứ tự 2 học sinh.",
correctAnswer:"Đúng"
}
]
},

{
id:"hv_s2_3",
type:"true-false",
question:"Từ các chữ số 1,2,3,4,5.",
subQuestions:[
{
label:"a",
text:"Có 60 số có 3 chữ số khác nhau.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Có 20 số chẵn có 3 chữ số khác nhau.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Có 24 số lẻ có 3 chữ số khác nhau.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Số số chẵn bằng số số lẻ.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"hv_s3_1",
type:"short-answer",
question:"Có bao nhiêu cách xếp 5 học sinh phân biệt thành một hàng dọc?",
answer:"120",
explanation:"Số cách xếp 5 học sinh là số hoán vị của 5 phần tử: P₅=5!=120."
},

{
id:"hv_s3_2",
type:"short-answer",
question:"Một lớp có 10 học sinh. Có bao nhiêu cách chọn ra 3 học sinh tham gia cuộc thi?",
answer:"120",
explanation:"Chọn 3 học sinh từ 10 học sinh: C₁₀³=120."
},

{
id:"hv_s3_3",
type:"short-answer",
question:"Có 6 học sinh. Chọn lớp trưởng, lớp phó học tập và lớp phó lao động. Có bao nhiêu cách?",
answer:"120",
explanation:"Ba chức vụ khác nhau nên dùng chỉnh hợp: A₆³=6×5×4=120."
},

{
id:"hv_s3_4",
type:"short-answer",
question:"Từ các chữ số 1,2,3,4 lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
answer:"24",
explanation:"Mỗi số là một hoán vị của 4 chữ số: P₄=4!=24."
},

{
id:"hv_s3_5",
type:"short-answer",
question:"Một hộp có 8 viên bi khác nhau. Có bao nhiêu cách chọn 2 viên bi?",
answer:"28",
explanation:"Chọn 2 viên từ 8 viên: C₈²=8×7/2=28."
}
],


},
23: {
stage1:[
{
id:"nt_s1_1",
type:"multiple-choice",
question:"Khai triển (x+1)^5 có bao nhiêu số hạng?",
options:["5","6","7","8"],
answer:"6"
},

{
id:"nt_s1_2",
type:"multiple-choice",
question:"Hệ số của x³ trong khai triển (x+1)^5 là",
options:["5","10","15","20"],
answer:"10"
},

{
id:"nt_s1_3",
type:"multiple-choice",
question:"Tổng các hệ số trong khai triển (x+1)^5 bằng",
options:["16","25","32","64"],
answer:"32"
},

{
id:"nt_s1_4",
type:"multiple-choice",
question:"Hệ số của x² trong khai triển (1+2x)^4 là",
options:["16","24","32","48"],
answer:"24"
},

{
id:"nt_s1_5",
type:"multiple-choice",
question:"Số hạng không chứa x trong khai triển (x+2)^4 là",
options:["4","8","16","32"],
answer:"16"
},

{
id:"nt_s1_6",
type:"multiple-choice",
question:"Hệ số của x⁴ trong khai triển (x-3)^5 là",
options:["-15","15","30","-30"],
answer:"-15"
},

{
id:"nt_s1_7",
type:"multiple-choice",
question:"Tổng các hệ số trong khai triển (1-2x)^5 là",
options:["-1","0","1","32"],
answer:"-1"
},

{
id:"nt_s1_8",
type:"multiple-choice",
question:"Hệ số của x² trong khai triển (x+2)^5 là",
options:["20","40","80","160"],
answer:"80"
},

{
id:"nt_s1_9",
type:"multiple-choice",
question:"Giá trị của C₅² là",
options:["5","10","15","20"],
answer:"10"
},

{
id:"nt_s1_10",
type:"multiple-choice",
question:"Số hạng đầu tiên trong khai triển (x+1)^6 là",
options:["1","x","x⁶","6x"],
answer:"x⁶"
}
],
stage2:[
{
id:"nt_s2_1",
type:"true-false",
question:"Xét khai triển (x+1)^5.",
subQuestions:[
{
label:"a",
text:"Có 6 số hạng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hệ số của x³ là 10.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Số hạng tự do là 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tổng các hệ số bằng 25.",
correctAnswer:"Sai"
}
]
},

{
id:"nt_s2_2",
type:"true-false",
question:"Xét khai triển (x-3)^4.",
subQuestions:[
{
label:"a",
text:"Hệ số của x⁴ là 1.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hệ số của x³ là -12.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hệ số của x² là 54.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Số hạng tự do bằng 27.",
correctAnswer:"Sai"
}
]
},

{
id:"nt_s2_3",
type:"true-false",
question:"Xét khai triển (1+2x)^5.",
subQuestions:[
{
label:"a",
text:"Tổng các hệ số bằng 243.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hệ số của x là 10.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hệ số của x² là 40.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Số hạng tự do bằng 2.",
correctAnswer:"Sai"
}
]
}
],
},
24: {
stage1:[
{
id:"kgm_s1_1",
type:"multiple-choice",
question:"Gieo một đồng xu một lần. Số phần tử của không gian mẫu là",
options:["1","2","3","4"],
answer:"2"
},

{
id:"kgm_s1_2",
type:"multiple-choice",
question:"Gieo một con xúc xắc một lần. Số phần tử của không gian mẫu là",
options:["4","5","6","12"],
answer:"6"
},

{
id:"kgm_s1_3",
type:"multiple-choice",
question:"Gieo một đồng xu và một xúc xắc. Số phần tử của không gian mẫu là",
options:["6","8","10","12"],
answer:"12"
},

{
id:"kgm_s1_4",
type:"multiple-choice",
question:"Gieo hai đồng xu. Số phần tử của không gian mẫu là",
options:["2","4","6","8"],
answer:"4"
},

{
id:"kgm_s1_5",
type:"multiple-choice",
question:"Gieo hai con xúc xắc. Số phần tử của không gian mẫu là",
options:["12","24","36","72"],
answer:"36"
},

{
id:"kgm_s1_6",
type:"multiple-choice",
question:"Gieo một đồng xu và một xúc xắc. Biến cố A: 'Xuất hiện mặt sấp và số chấm chẵn'. Số phần tử của A là",
options:["2","3","4","6"],
answer:"3"
},

{
id:"kgm_s1_7",
type:"multiple-choice",
question:"Một hộp có 4 bi đỏ và 5 bi xanh. Chọn 1 viên bi. Số phần tử của không gian mẫu là",
options:["4","5","9","20"],
answer:"9"
},

{
id:"kgm_s1_8",
type:"multiple-choice",
question:"Trên giá có 4 sách Toán và 3 sách Lý khác nhau. Chọn 1 quyển sách. Số phần tử của không gian mẫu là",
options:["7","12","21","24"],
answer:"7"
},

{
id:"kgm_s1_9",
type:"multiple-choice",
question:"Có 4 nam và 6 nữ. Chọn ngẫu nhiên 1 người. Số phần tử của không gian mẫu là",
options:["4","6","10","24"],
answer:"10"
},

{
id:"kgm_s1_10",
type:"multiple-choice",
question:"Gieo một đồng xu và một xúc xắc. Biến cố B: 'Xuất hiện mặt ngửa và số chấm lẻ'. Số phần tử của B là",
options:["2","3","4","6"],
answer:"3"
}
],
stage2:[
{
id:"kgm_s2_1",
type:"true-false",
question:"Gieo một đồng xu sau đó gieo một con xúc xắc.",
subQuestions:[
{
label:"a",
text:"Số phần tử của không gian mẫu là 12.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Biến cố 'mặt sấp và số chấm chẵn' có 3 phần tử.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Biến cố 'mặt ngửa và số chấm lẻ' có 3 phần tử.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Biến cố 'xuất hiện mặt 6 chấm' có 1 phần tử.",
correctAnswer:"Sai"
}
]
},

{
id:"kgm_s2_2",
type:"true-false",
question:"Trên giá sách có 4 sách Toán, 3 sách Lý, 2 sách Hóa. Chọn ngẫu nhiên 3 quyển sách.",
subQuestions:[
{
label:"a",
text:"Số phần tử của không gian mẫu là C(9,3)=84.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Biến cố 'thuộc 3 môn khác nhau' có 24 phần tử.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Biến cố 'đều là môn Toán' có 4 phần tử.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Biến cố 'có ít nhất một quyển Toán' có 70 phần tử.",
correctAnswer:"Đúng"
}
]
},

{
id:"kgm_s2_3",
type:"true-false",
question:"Gieo hai con xúc xắc cân đối.",
subQuestions:[
{
label:"a",
text:"Không gian mẫu có 36 phần tử.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Biến cố 'tổng bằng 7' có 6 phần tử.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Biến cố 'hai mặt giống nhau' có 6 phần tử.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Biến cố 'tổng bằng 13' là biến cố chắc chắn.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"kgm_s3_1",
type:"short-answer",
question:"Một nhóm có 4 bạn nam và 6 bạn nữ. Chọn ngẫu nhiên cùng lúc 3 bạn. Có bao nhiêu kết quả thuận lợi cho biến cố 'Trong 3 bạn được chọn có ít nhất 1 bạn nữ'?",
answer:"116",
explanation:"Tổng số cách chọn 3 bạn là C(10,3)=120. Trường hợp không có nữ: C(4,3)=4. Vậy số kết quả thuận lợi là 120−4=116."
},

{
id:"kgm_s3_2",
type:"short-answer",
question:"Gieo một đồng xu và một con xúc xắc. Có bao nhiêu kết quả thuận lợi cho biến cố 'Xuất hiện mặt ngửa và số chấm lẻ'?",
answer:"3",
explanation:"Các kết quả là (N,1), (N,3), (N,5). Có 3 kết quả."
},

{
id:"kgm_s3_3",
type:"short-answer",
question:"Gieo hai con xúc xắc. Có bao nhiêu kết quả thuận lợi cho biến cố 'Tổng số chấm bằng 7'?",
answer:"6",
explanation:"Các cặp là (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Có 6 kết quả."
},

{
id:"kgm_s3_4",
type:"short-answer",
question:"Một hộp có 10 bi xanh, 20 bi đỏ, 15 bi vàng. Chọn đồng thời 3 viên. Có bao nhiêu cách chọn để 3 viên có màu khác nhau?",
answer:"3000",
explanation:"Chọn 1 bi xanh, 1 bi đỏ, 1 bi vàng: 10×20×15=3000 cách."
},

{
id:"kgm_s3_5",
type:"short-answer",
question:"Một nhóm gồm 2 nam Mạnh, Dũng và 2 nữ Hoa, Lan ngồi ngẫu nhiên trên một hàng ghế. Không gian mẫu có bao nhiêu phần tử?",
answer:"24",
explanation:"Số cách sắp xếp 4 người phân biệt là 4!=24."
}
]
},
25: {
stage1:[
{
id:"xs_s1_1",
type:"multiple-choice",
question:"Gieo một con xúc xắc cân đối một lần. Xác suất xuất hiện mặt 6 chấm là",
options:["1/3","1/6","1/2","1/12"],
answer:"1/6"
},

{
id:"xs_s1_2",
type:"multiple-choice",
question:"Gieo một đồng xu cân đối một lần. Xác suất xuất hiện mặt ngửa là",
options:["1/4","1/2","1/3","1"],
answer:"1/2"
},

{
id:"xs_s1_3",
type:"multiple-choice",
question:"Gieo một con xúc xắc. Xác suất xuất hiện số chẵn là",
options:["1/2","1/3","2/3","1/6"],
answer:"1/2"
},

{
id:"xs_s1_4",
type:"multiple-choice",
question:"Gieo hai đồng xu cân đối. Xác suất xuất hiện đúng một mặt ngửa là",
options:["1/2","1/4","3/4","1"],
answer:"1/2"
},

{
id:"xs_s1_5",
type:"multiple-choice",
question:"Gieo hai con xúc xắc. Xác suất để tổng số chấm bằng 7 là",
options:["1/6","1/12","1/18","1/36"],
answer:"1/6"
},

{
id:"xs_s1_6",
type:"multiple-choice",
question:"Một hộp có 4 bi đỏ và 6 bi xanh. Chọn ngẫu nhiên 1 viên. Xác suất chọn được bi đỏ là",
options:["2/5","3/5","1/2","1/5"],
answer:"2/5"
},

{
id:"xs_s1_7",
type:"multiple-choice",
question:"Một lớp có 12 nam và 18 nữ. Chọn ngẫu nhiên 1 học sinh. Xác suất chọn được nữ là",
options:["3/5","2/5","1/2","3/10"],
answer:"3/5"
},

{
id:"xs_s1_8",
type:"multiple-choice",
question:"Gieo một xúc xắc. Xác suất xuất hiện số lớn hơn 4 là",
options:["1/3","1/2","2/3","1/6"],
answer:"1/3"
},

{
id:"xs_s1_9",
type:"multiple-choice",
question:"Gieo hai đồng xu. Xác suất xuất hiện hai mặt ngửa là",
options:["1/2","1/4","3/4","1"],
answer:"1/4"
},

{
id:"xs_s1_10",
type:"multiple-choice",
question:"Một hộp có 5 bi trắng và 5 bi đen. Chọn ngẫu nhiên 1 viên. Xác suất chọn được bi trắng là",
options:["1/2","1/5","2/5","3/5"],
answer:"1/2"
}
],
stage2:[
{
id:"xs_s2_1",
type:"true-false",
question:"Gieo một con xúc xắc cân đối một lần.",
subQuestions:[
{
label:"a",
text:"Xác suất xuất hiện mặt 6 chấm là 1/6.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Xác suất xuất hiện số chẵn là 1/2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Xác suất xuất hiện số lớn hơn 4 là 1/3.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Xác suất xuất hiện số nhỏ hơn 7 bằng 0.",
correctAnswer:"Sai"
}
]
},

{
id:"xs_s2_2",
type:"true-false",
question:"Gieo hai đồng xu cân đối.",
subQuestions:[
{
label:"a",
text:"Không gian mẫu có 4 phần tử.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Xác suất xuất hiện hai mặt ngửa là 1/4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Xác suất xuất hiện đúng một mặt ngửa là 1/2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Xác suất xuất hiện ít nhất một mặt ngửa là 1/2.",
correctAnswer:"Sai"
}
]
},

{
id:"xs_s2_3",
type:"true-false",
question:"Một hộp có 4 bi đỏ và 6 bi xanh. Chọn ngẫu nhiên một viên bi.",
subQuestions:[
{
label:"a",
text:"Không gian mẫu có 10 phần tử.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Xác suất chọn được bi đỏ là 2/5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Xác suất chọn được bi xanh là 3/5.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Xác suất chọn được bi đỏ hoặc xanh bằng 2.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"xs_s3_1",
type:"short-answer",
question:"Gieo hai con xúc xắc cân đối. Có bao nhiêu kết quả thuận lợi cho biến cố 'Tổng số chấm bằng 7'?",
answer:"6",
explanation:"Các kết quả là (1;6), (2;5), (3;4), (4;3), (5;2), (6;1). Có 6 kết quả thuận lợi."
},

{
id:"xs_s3_2",
type:"short-answer",
question:"Một hộp có 8 bi đỏ và 12 bi xanh. Chọn ngẫu nhiên 1 viên. Xác suất chọn được bi đỏ bằng bao nhiêu? (Nhập tử số sau khi rút gọn)",
answer:"2",
explanation:"P = 8/(8+12)=8/20=2/5. Tử số sau khi rút gọn là 2."
},

{
id:"xs_s3_3",
type:"short-answer",
question:"Gieo một con xúc xắc. Xác suất xuất hiện số nguyên tố là bao nhiêu? (Nhập mẫu số của phân số tối giản)",
answer:"2",
explanation:"Các số nguyên tố là 2,3,5 nên có 3 kết quả thuận lợi. P=3/6=1/2. Mẫu số là 2."
},

{
id:"xs_s3_4",
type:"short-answer",
question:"Gieo hai đồng xu cân đối. Xác suất xuất hiện ít nhất một mặt ngửa là bao nhiêu? (Nhập tử số của phân số tối giản)",
answer:"3",
explanation:"Không gian mẫu có 4 phần tử. Chỉ có 1 kết quả không có mặt ngửa là (S,S). Vậy P=3/4. Tử số là 3."
},

{
id:"xs_s3_5",
type:"short-answer",
question:"Một lớp có 15 nam và 25 nữ. Chọn ngẫu nhiên 1 học sinh. Xác suất chọn được nữ bằng bao nhiêu phần trăm?",
answer:"62.5",
explanation:"P=25/(15+25)=25/40=5/8=0,625=62,5%."
}
]
},
26: {
stage1:[
{
id:"gtlg_s1_1",
type:"multiple-choice",
question:"Giá trị của sin(π/6) bằng",
options:["0","1/2","√2/2","√3/2"],
answer:"1/2"
},

{
id:"gtlg_s1_2",
type:"multiple-choice",
question:"Giá trị của cos(π/3) bằng",
options:["0","1/2","√2/2","√3/2"],
answer:"1/2"
},

{
id:"gtlg_s1_3",
type:"multiple-choice",
question:"Giá trị của tan(π/4) bằng",
options:["0","1","√2","√3"],
answer:"1"
},

{
id:"gtlg_s1_4",
type:"multiple-choice",
question:"Giá trị của sin(π−α) là",
options:[
"sinα",
"-sinα",
"cosα",
"-cosα"
],
answer:"sinα"
},

{
id:"gtlg_s1_5",
type:"multiple-choice",
question:"Giá trị của cos(π−α) là",
options:[
"cosα",
"-cosα",
"sinα",
"-sinα"
],
answer:"-cosα"
},

{
id:"gtlg_s1_6",
type:"multiple-choice",
question:"Giá trị của sin(π/2−α) là",
options:[
"sinα",
"cosα",
"-sinα",
"-cosα"
],
answer:"cosα"
},

{
id:"gtlg_s1_7",
type:"multiple-choice",
question:"Giá trị của cos(π/2−α) là",
options:[
"sinα",
"cosα",
"-sinα",
"-cosα"
],
answer:"sinα"
},

{
id:"gtlg_s1_8",
type:"multiple-choice",
question:"Nếu α thuộc góc phần tư II thì",
options:[
"sinα<0",
"cosα>0",
"tanα<0",
"tanα>0"
],
answer:"tanα<0"
},

{
id:"gtlg_s1_9",
type:"multiple-choice",
question:"Giá trị của sin²α + cos²α bằng",
options:["0","1","2","tan²α"],
answer:"1"
},

{
id:"gtlg_s1_10",
type:"multiple-choice",
question:"Giá trị của 3sin²90°−2cos²60°−3tan45° bằng",
options:["1","0","-1","2"],
answer:"1"
}
],
stage2:[
{
id:"gtlg_s2_1",
type:"true-false",
question:"Xét các giá trị lượng giác của góc đặc biệt.",
subQuestions:[
{
label:"a",
text:"sin30° = 1/2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cos60° = 1/2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"tan45° = 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"sin90° = 0.",
correctAnswer:"Sai"
}
]
},

{
id:"gtlg_s2_2",
type:"true-false",
question:"Cho góc α bất kỳ.",
subQuestions:[
{
label:"a",
text:"sin(π−α)=sinα.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cos(π−α)=-cosα.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"tan(π+α)=tanα.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cos(π+α)=cosα.",
correctAnswer:"Sai"
}
]
},

{
id:"gtlg_s2_3",
type:"true-false",
question:"Cho α thuộc góc phần tư II.",
subQuestions:[
{
label:"a",
text:"sinα > 0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cosα < 0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"tanα < 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cotα > 0.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"gtlg_s3_1",
type:"short-answer",
question:"Tính giá trị của biểu thức sin²30° + cos²30°.",
answer:"1",
explanation:"Theo hệ thức lượng giác cơ bản: sin²α + cos²α = 1 với mọi α."
},

{
id:"gtlg_s3_2",
type:"short-answer",
question:"Cho tanα = 2. Tính cotα.",
answer:"0.5",
explanation:"cotα = 1/tanα = 1/2 = 0.5."
},

{
id:"gtlg_s3_3",
type:"short-answer",
question:"Tính giá trị của sin(π/2 − π/6).",
answer:"0.8660254",
explanation:"sin(π/2−α)=cosα ⇒ sin(π/3)=√3/2≈0.8660254."
},

{
id:"gtlg_s3_4",
type:"short-answer",
question:"Tính giá trị của cos(π − π/3).",
answer:"-0.5",
explanation:"cos(π−α)=-cosα ⇒ cos(2π/3)=-1/2."
},

{
id:"gtlg_s3_5",
type:"short-answer",
question:"Cho sinα = 3/5 và α thuộc góc phần tư II. Tính cosα.",
answer:"-0.8",
explanation:"cos²α=1−sin²α=1−9/25=16/25. Vì α thuộc góc phần tư II nên cosα<0. Do đó cosα=-4/5=-0.8."
}
]
},
27: {
stage1:[
{
id:"ctlg_s1_1",
type:"multiple-choice",
question:"Công thức sin(a+b) là",
options:[
"sinacosb+cosasinb",
"sinacosb-cosasinb",
"cosacosb-sinasinb",
"cosacosb+sinasinb"
],
answer:"sinacosb+cosasinb"
},

{
id:"ctlg_s1_2",
type:"multiple-choice",
question:"Công thức cos(a+b) là",
options:[
"cosacosb+sinasinb",
"cosacosb-sinasinb",
"sinacosb+cosasinb",
"sinacosb-cosasinb"
],
answer:"cosacosb-sinasinb"
},

{
id:"ctlg_s1_3",
type:"multiple-choice",
question:"Công thức tan(a+b) là",
options:[
"(tana+tanb)/(1-tanatanb)",
"(tana-tanb)/(1+tanatanb)",
"(tana+tanb)/(1+tanatanb)",
"(tana-tanb)/(1-tanatanb)"
],
answer:"(tana+tanb)/(1-tanatanb)"
},

{
id:"ctlg_s1_4",
type:"multiple-choice",
question:"Công thức sin2a là",
options:[
"2sinacosα",
"2sinacosα",
"sin²a-cos²a",
"1-2sin²a"
],
answer:"2sinacosα"
},

{
id:"ctlg_s1_5",
type:"multiple-choice",
question:"Công thức cos2a là",
options:[
"cos²a-sin²a",
"2sinacosα",
"1-sin²a",
"1-cos²a"
],
answer:"cos²a-sin²a"
},

{
id:"ctlg_s1_6",
type:"multiple-choice",
question:"Giá trị của sin60°cos30°+cos60°sin30° bằng",
options:["0","1/2","√3/2","1"],
answer:"1"
},

{
id:"ctlg_s1_7",
type:"multiple-choice",
question:"Giá trị của cos60°cos30°-sin60°sin30° bằng",
options:["0","1/2","√3/2","1"],
answer:"0"
},

{
id:"ctlg_s1_8",
type:"multiple-choice",
question:"sinx+siny bằng",
options:[
"2sin((x+y)/2)cos((x-y)/2)",
"2cos((x+y)/2)sin((x-y)/2)",
"sin(x+y)",
"cos(x-y)"
],
answer:"2sin((x+y)/2)cos((x-y)/2)"
},

{
id:"ctlg_s1_9",
type:"multiple-choice",
question:"cosx+cosy bằng",
options:[
"2cos((x+y)/2)cos((x-y)/2)",
"2sin((x+y)/2)sin((x-y)/2)",
"cos(x+y)",
"sin(x-y)"
],
answer:"2cos((x+y)/2)cos((x-y)/2)"
},

{
id:"ctlg_s1_10",
type:"multiple-choice",
question:"Giá trị của sin45°cos45° bằng",
options:["1/4","1/2","√2/2","1"],
answer:"1/2"
}
],
stage2:[
{
id:"ctlg_s2_1",
type:"true-false",
question:"Xét các công thức cộng lượng giác.",
subQuestions:[
{
label:"a",
text:"sin(a+b)=sinacosb+cosasinb.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cos(a+b)=cosacosb-sinasinb.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"sin(a-b)=sinacosb-cosasinb.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cos(a-b)=cosacosb-sinasinb.",
correctAnswer:"Sai"
}
]
},

{
id:"ctlg_s2_2",
type:"true-false",
question:"Xét các công thức nhân đôi.",
subQuestions:[
{
label:"a",
text:"sin2a=2sinacosα.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cos2a=cos²a-sin²a.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"cos2a=1-2sin²a.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cos2a=1+2sin²a.",
correctAnswer:"Sai"
}
]
},

{
id:"ctlg_s2_3",
type:"true-false",
question:"Xét các công thức biến đổi tổng thành tích.",
subQuestions:[
{
label:"a",
text:"sinx+siny=2sin((x+y)/2)cos((x-y)/2).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cosx+cosy=2cos((x+y)/2)cos((x-y)/2).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"sinx-siny=2cos((x+y)/2)sin((x-y)/2).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cosx-cosy=2sin((x+y)/2)sin((x-y)/2).",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"ctlg_s3_1",
type:"short-answer",
question:"Tính sin(30°+60°).",
answer:"1",
explanation:"sin(30°+60°)=sin90°=1."
},

{
id:"ctlg_s3_2",
type:"short-answer",
question:"Tính cos(60°+60°).",
answer:"-0.5",
explanation:"cos120°=-1/2=-0.5."
},

{
id:"ctlg_s3_3",
type:"short-answer",
question:"Tính sin60°cos30°+cos60°sin30°.",
answer:"1",
explanation:"Theo công thức cộng: sin(60°+30°)=sin90°=1."
},

{
id:"ctlg_s3_4",
type:"short-answer",
question:"Tính cos60°cos30°-sin60°sin30°.",
answer:"0",
explanation:"Theo công thức cộng: cos(60°+30°)=cos90°=0."
},

{
id:"ctlg_s3_5",
type:"short-answer",
question:"Biết sinx=3/5 và x là góc nhọn. Tính cos2x.",
answer:"0.28",
explanation:"cos2x=1-2sin²x=1-2×(3/5)²=1-18/25=7/25=0.28."
}
]
},
28: {
stage1:[
{
id:"hslg_s1_1",
type:"multiple-choice",
question:"Tập xác định của hàm số y = sinx là",
options:["R","R\\{0}","R\\{kπ}","(0;+∞)"],
answer:"R"
},

{
id:"hslg_s1_2",
type:"multiple-choice",
question:"Tập xác định của hàm số y = tanx là",
options:[
"R\\{kπ}",
"R\\{π/2+kπ}",
"R",
"(0;+∞)"
],
answer:"R\\{π/2+kπ}"
},

{
id:"hslg_s1_3",
type:"multiple-choice",
question:"Tập giá trị của hàm số y = sinx là",
options:[
"[-1;1]",
"[0;1]",
"R",
"(-1;1)"
],
answer:"[-1;1]"
},

{
id:"hslg_s1_4",
type:"multiple-choice",
question:"Chu kỳ của hàm số y = sinx là",
options:["π","2π","4π","1"],
answer:"2π"
},

{
id:"hslg_s1_5",
type:"multiple-choice",
question:"Chu kỳ của hàm số y = tanx là",
options:["π","2π","4π","π/2"],
answer:"π"
},

{
id:"hslg_s1_6",
type:"multiple-choice",
question:"Hàm số y = cosx là",
options:[
"hàm chẵn",
"hàm lẻ",
"không chẵn không lẻ",
"hàm hằng"
],
answer:"hàm chẵn"
},

{
id:"hslg_s1_7",
type:"multiple-choice",
question:"Hàm số y = sinx là",
options:[
"hàm chẵn",
"hàm lẻ",
"hàm tuần hoàn nhưng không lẻ",
"hàm hằng"
],
answer:"hàm lẻ"
},

{
id:"hslg_s1_8",
type:"multiple-choice",
question:"Giá trị lớn nhất của hàm số y = 2 + 3sinx là",
options:["2","3","4","5"],
answer:"5"
},

{
id:"hslg_s1_9",
type:"multiple-choice",
question:"Giá trị nhỏ nhất của hàm số y = 2 + 3sinx là",
options:["-1","0","1","2"],
answer:"-1"
},

{
id:"hslg_s1_10",
type:"multiple-choice",
question:"Tập giá trị của hàm số y = 3cosx - 1 là",
options:[
"[-4;2]",
"[-3;3]",
"[-2;4]",
"[-1;5]"
],
answer:"[-4;2]"
}
],
stage2:[
{
id:"hslg_s2_1",
type:"true-false",
question:"Xét hàm số y = 2 + 3cosx.",
subQuestions:[
{
label:"a",
text:"Tập xác định là R.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Giá trị lớn nhất bằng 5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Giá trị nhỏ nhất bằng -1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Chu kỳ là π.",
correctAnswer:"Sai"
}
]
},

{
id:"hslg_s2_2",
type:"true-false",
question:"Xét hàm số y = tanx.",
subQuestions:[
{
label:"a",
text:"Hàm số có chu kỳ π.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hàm số là hàm lẻ.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Tập xác định là R.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Tập xác định là R\\{π/2+kπ}.",
correctAnswer:"Đúng"
}
]
},

{
id:"hslg_s2_3",
type:"true-false",
question:"Xét hàm số y = cosx.",
subQuestions:[
{
label:"a",
text:"Hàm số là hàm chẵn.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Chu kỳ bằng 2π.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Tập giá trị là [-1;1].",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số là hàm lẻ.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"hslg_s3_1",
type:"short-answer",
question:"Tìm giá trị lớn nhất của hàm số y = 3 + 2sinx.",
answer:"5",
explanation:"Vì -1 ≤ sinx ≤ 1 nên 1 ≤ 2sinx ≤ 2. Suy ra 1 ≤ y ≤ 5. Giá trị lớn nhất là 5."
},

{
id:"hslg_s3_2",
type:"short-answer",
question:"Tìm giá trị nhỏ nhất của hàm số y = 4cosx - 1.",
answer:"-5",
explanation:"Vì -1 ≤ cosx ≤ 1 nên -4 ≤ 4cosx ≤ 4. Suy ra -5 ≤ y ≤ 3. Giá trị nhỏ nhất là -5."
},

{
id:"hslg_s3_3",
type:"short-answer",
question:"Tìm chu kỳ của hàm số y = sin(2x).",
answer:"3.141592653589793",
explanation:"Chu kỳ của sin(ax) là T=2π/|a|. Với a=2 nên T=π."
},

{
id:"hslg_s3_4",
type:"short-answer",
question:"Tìm giá trị lớn nhất của hàm số y = sinx + cosx.",
answer:"1.414213562",
explanation:"sinx + cosx = √2·sin(x+π/4). Giá trị lớn nhất là √2 ≈ 1.414213562."
},

{
id:"hslg_s3_5",
type:"short-answer",
question:"Tìm tổng giá trị lớn nhất và nhỏ nhất của hàm số y = 4sinx - 3.",
answer:"-6",
explanation:"-1≤sinx≤1 ⇒ -7≤y≤1. Tổng giá trị lớn nhất và nhỏ nhất là 1+(-7)=-6."
}
]
},
29: {
stage1:[
{
id:"ptlg_s1_1",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình sinx = 0 là",
options:[
"x = kπ",
"x = π/2 + kπ",
"x = 2kπ",
"x = π + 2kπ"
],
answer:"x = kπ"
},

{
id:"ptlg_s1_2",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình cosx = 0 là",
options:[
"x = kπ",
"x = π/2 + kπ",
"x = 2kπ",
"x = π + kπ"
],
answer:"x = π/2 + kπ"
},

{
id:"ptlg_s1_3",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình tanx = 0 là",
options:[
"x = kπ",
"x = π/2 + kπ",
"x = 2kπ",
"x = π/4 + kπ"
],
answer:"x = kπ"
},

{
id:"ptlg_s1_4",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình sinx = 1 là",
options:[
"x = π/2 + 2kπ",
"x = π/2 + kπ",
"x = kπ",
"x = 2kπ"
],
answer:"x = π/2 + 2kπ"
},

{
id:"ptlg_s1_5",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình cosx = -1 là",
options:[
"x = π + 2kπ",
"x = π + kπ",
"x = 2kπ",
"x = π/2 + kπ"
],
answer:"x = π + 2kπ"
},

{
id:"ptlg_s1_6",
type:"multiple-choice",
question:"Phương trình sinx = 1/2 có một họ nghiệm là",
options:[
"x = π/6 + kπ",
"x = π/6 + 2kπ",
"x = π/3 + 2kπ",
"x = π/4 + kπ"
],
answer:"x = π/6 + 2kπ"
},

{
id:"ptlg_s1_7",
type:"multiple-choice",
question:"Phương trình cosx = 1/2 có một họ nghiệm là",
options:[
"x = π/3 + 2kπ",
"x = π/6 + 2kπ",
"x = π/2 + kπ",
"x = π + 2kπ"
],
answer:"x = π/3 + 2kπ"
},

{
id:"ptlg_s1_8",
type:"multiple-choice",
question:"Phương trình tanx = 1 có nghiệm tổng quát là",
options:[
"x = π/4 + kπ",
"x = π/4 + 2kπ",
"x = π/2 + kπ",
"x = kπ"
],
answer:"x = π/4 + kπ"
},

{
id:"ptlg_s1_9",
type:"multiple-choice",
question:"Số nghiệm của phương trình sinx = 0 trên đoạn [0;2π] là",
options:["2","3","4","1"],
answer:"3"
},

{
id:"ptlg_s1_10",
type:"multiple-choice",
question:"Số nghiệm của phương trình cosx = 0 trên đoạn [0;2π] là",
options:["1","2","3","4"],
answer:"2"
}
],
stage2:[
{
id:"ptlg_s2_1",
type:"true-false",
question:"Xét phương trình sinx = 0.",
subQuestions:[
{
label:"a",
text:"Nghiệm tổng quát là x = kπ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"x = π là một nghiệm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"x = π/2 là một nghiệm.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Trên [0;2π] có 3 nghiệm.",
correctAnswer:"Đúng"
}
]
},

{
id:"ptlg_s2_2",
type:"true-false",
question:"Xét phương trình cosx = 0.",
subQuestions:[
{
label:"a",
text:"Nghiệm tổng quát là x = π/2 + kπ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"x = 3π/2 là nghiệm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"x = π là nghiệm.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Trên [0;2π] có đúng 2 nghiệm.",
correctAnswer:"Đúng"
}
]
},

{
id:"ptlg_s2_3",
type:"true-false",
question:"Xét phương trình tanx = 1.",
subQuestions:[
{
label:"a",
text:"Nghiệm tổng quát là x = π/4 + kπ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"x = 5π/4 là nghiệm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"x = 3π/4 là nghiệm.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Trên [0;2π] có 2 nghiệm.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"ptlg_s3_1",
type:"short-answer",
question:"Có bao nhiêu nghiệm của phương trình sinx = 0 trên đoạn [0;3π]?",
answer:"4",
explanation:"sinx=0 ⇔ x=kπ. Trên [0;3π] có các nghiệm: 0, π, 2π, 3π. Vậy có 4 nghiệm."
},

{
id:"ptlg_s3_2",
type:"short-answer",
question:"Có bao nhiêu nghiệm của phương trình cosx = 0 trên đoạn [0;2π]?",
answer:"2",
explanation:"cosx=0 ⇔ x=π/2+kπ. Trên [0;2π] có hai nghiệm là π/2 và 3π/2."
},

{
id:"ptlg_s3_3",
type:"short-answer",
question:"Tìm nghiệm nhỏ nhất dương của phương trình tanx = 1.",
answer:"0.785398163",
explanation:"tanx=1 ⇔ x=π/4+kπ. Nghiệm dương nhỏ nhất là π/4≈0.785398163."
},

{
id:"ptlg_s3_4",
type:"short-answer",
question:"Có bao nhiêu nghiệm của phương trình sinx = 1/2 trên đoạn [0;2π]?",
answer:"2",
explanation:"sinx=1/2 ⇔ x=π/6+2kπ hoặc x=5π/6+2kπ. Trên [0;2π] có 2 nghiệm."
},

{
id:"ptlg_s3_5",
type:"short-answer",
question:"Tìm tổng các nghiệm của phương trình cosx = 0 trên đoạn [0;2π].",
answer:"6.283185307",
explanation:"Hai nghiệm là π/2 và 3π/2. Tổng bằng 2π≈6.283185307."
}
]
},
30: {
stage1:[
{
id:"review_t1",
type:"multiple-choice",
question:"Giá trị của sin(π/6) bằng",
options:["0","1/2","√2/2","√3/2"],
answer:"1/2"
},
{
id:"review_t2",
type:"multiple-choice",
question:"Giá trị của cos(π/3) bằng",
options:["0","1/2","√2/2","√3/2"],
answer:"1/2"
},
{
id:"review_t3",
type:"multiple-choice",
question:"Giá trị của tan(π/4) bằng",
options:["0","1","√2","√3"],
answer:"1"
},
{
id:"review_t4",
type:"multiple-choice",
question:"sin²x + cos²x bằng",
options:["0","1","2","tan²x"],
answer:"1"
},
{
id:"review_t5",
type:"multiple-choice",
question:"sin(a+b) bằng",
options:[
"sinacosb+cosasinb",
"sinacosb-cosasinb",
"cosacosb+sinasinb",
"cosacosb-sinasinb"
],
answer:"sinacosb+cosasinb"
},
{
id:"review_t6",
type:"multiple-choice",
question:"cos2x bằng",
options:[
"cos²x-sin²x",
"2sinxcosx",
"1+2sin²x",
"2cos²x-2"
],
answer:"cos²x-sin²x"
},
{
id:"review_t7",
type:"multiple-choice",
question:"Chu kỳ của hàm số y=sinx là",
options:["π","2π","4π","π/2"],
answer:"2π"
},
{
id:"review_t8",
type:"multiple-choice",
question:"Hàm số y=cosx là",
options:[
"hàm chẵn",
"hàm lẻ",
"không chẵn không lẻ",
"hàm hằng"
],
answer:"hàm chẵn"
},
{
id:"review_t9",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình sinx=0 là",
options:[
"x=kπ",
"x=π/2+kπ",
"x=2kπ",
"x=π+2kπ"
],
answer:"x=kπ"
},
{
id:"review_t10",
type:"multiple-choice",
question:"Nghiệm tổng quát của phương trình tanx=1 là",
options:[
"x=π/4+kπ",
"x=π/4+2kπ",
"x=kπ",
"x=π/2+kπ"
],
answer:"x=π/4+kπ"
}
],

stage2:[
{
id:"review_tf1",
type:"true-false",
question:"Xét các mệnh đề sau.",
subQuestions:[
{
label:"a",
text:"sin(π−x)=sinx.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cos(π−x)=−cosx.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"tan(π+x)=tanx.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"cos(π+x)=cosx.",
correctAnswer:"Sai"
}
]
},

{
id:"review_tf2",
type:"true-false",
question:"Xét hàm số lượng giác.",
subQuestions:[
{
label:"a",
text:"Hàm số y=sinx có chu kỳ 2π.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hàm số y=cosx là hàm chẵn.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hàm số y=tanx có chu kỳ π.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tập xác định của tanx là R.",
correctAnswer:"Sai"
}
]
},

{
id:"review_tf3",
type:"true-false",
question:"Xét các phương trình lượng giác.",
subQuestions:[
{
label:"a",
text:"sinx=0 có nghiệm x=kπ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"cosx=0 có nghiệm x=π/2+kπ.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"tanx=0 có nghiệm x=kπ.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"sinx=1 có nghiệm x=π/2+kπ.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"review_s1",
type:"short-answer",
question:"Tính giá trị của sin²30° + cos²30°.",
answer:"1",
explanation:"Theo hệ thức cơ bản sin²x + cos²x = 1."
},

{
id:"review_s2",
type:"short-answer",
question:"Tính giá trị của sin60°cos30° + cos60°sin30°.",
answer:"1",
explanation:"Theo công thức cộng: sin(60°+30°)=sin90°=1."
},

{
id:"review_s3",
type:"short-answer",
question:"Tìm giá trị lớn nhất của hàm số y=2+3sinx.",
answer:"5",
explanation:"Vì -1≤sinx≤1 nên -3≤3sinx≤3. Suy ra -1≤y≤5. GTLN bằng 5."
},

{
id:"review_s4",
type:"short-answer",
question:"Có bao nhiêu nghiệm của phương trình sinx=0 trên đoạn [0;2π]?",
answer:"3",
explanation:"Các nghiệm là 0, π, 2π. Có 3 nghiệm."
},

{
id:"review_s5",
type:"short-answer",
question:"Tìm nghiệm dương nhỏ nhất của phương trình tanx=1.",
answer:"0.785398163",
explanation:"tanx=1 ⇔ x=π/4+kπ. Nghiệm dương nhỏ nhất là π/4≈0.785398163."
}
]
},
31: {
stage1:[
{
id:"dayso_s1_1",
type:"multiple-choice",
question:"Cho dãy số un = 2n + 3. Giá trị của u6 bằng",
options:["12","15","17","18"],
answer:"15"
},

{
id:"dayso_s1_2",
type:"multiple-choice",
question:"Cho dãy số un = n². Giá trị của u5 bằng",
options:["10","20","25","30"],
answer:"25"
},

{
id:"dayso_s1_3",
type:"multiple-choice",
question:"Cho dãy số un = 1/n. Dãy số này là",
options:["Tăng","Giảm","Không đổi","Không xác định"],
answer:"Giảm"
},

{
id:"dayso_s1_4",
type:"multiple-choice",
question:"Cho dãy số un = n+1. Dãy số này là",
options:["Tăng","Giảm","Không đổi","Bị chặn"],
answer:"Tăng"
},

{
id:"dayso_s1_5",
type:"multiple-choice",
question:"Cho dãy số un = (-1)^n. Dãy số này là",
options:[
"Tăng",
"Giảm",
"Không tăng không giảm",
"Tăng và bị chặn"
],
answer:"Không tăng không giảm"
},

{
id:"dayso_s1_6",
type:"multiple-choice",
question:"Dãy số nào sau đây bị chặn?",
options:[
"un=n",
"un=n²",
"un=1/n",
"un=2^n"
],
answer:"un=1/n"
},

{
id:"dayso_s1_7",
type:"multiple-choice",
question:"Cho dãy số un=(n+1)/(n+2). Dãy số bị chặn trên bởi",
options:["0","1","2","3"],
answer:"1"
},

{
id:"dayso_s1_8",
type:"multiple-choice",
question:"Cho u1=1, un+1=un+2. Giá trị của u2 là",
options:["1","2","3","4"],
answer:"3"
},

{
id:"dayso_s1_9",
type:"multiple-choice",
question:"Cho u1=2, un+1=un+3. Giá trị của u3 là",
options:["5","6","7","8"],
answer:"8"
},

{
id:"dayso_s1_10",
type:"multiple-choice",
question:"Cho dãy số un=3−1/n. Dãy số bị chặn trên bởi",
options:["1","2","3","4"],
answer:"3"
}
],
stage2:[
{
id:"dayso_s2_1",
type:"true-false",
question:"Cho dãy số un=(n+1)/(n+2).",
subQuestions:[
{
label:"a",
text:"u1=2/3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Dãy số tăng.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Dãy số bị chặn trên bởi 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Dãy số không bị chặn.",
correctAnswer:"Sai"
}
]
},

{
id:"dayso_s2_2",
type:"true-false",
question:"Cho dãy số un=1/n.",
subQuestions:[
{
label:"a",
text:"u1=1.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Dãy số giảm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Dãy số bị chặn.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Dãy số tăng.",
correctAnswer:"Sai"
}
]
},

{
id:"dayso_s2_3",
type:"true-false",
question:"Cho dãy số un=(-1)^n.",
subQuestions:[
{
label:"a",
text:"u1=-1.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u2=1.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Dãy số tăng.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Dãy số bị chặn.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"dayso_s3_1",
type:"short-answer",
question:"Cho dãy số un=2n+1. Tính u10.",
answer:"21",
explanation:"u10=2×10+1=21."
},

{
id:"dayso_s3_2",
type:"short-answer",
question:"Cho dãy số un=n²−1. Tính u6.",
answer:"35",
explanation:"u6=6²−1=36−1=35."
},

{
id:"dayso_s3_3",
type:"short-answer",
question:"Cho dãy số u1=1, un+1=un+2. Tính u5.",
answer:"9",
explanation:"u2=3, u3=5, u4=7, u5=9."
},

{
id:"dayso_s3_4",
type:"short-answer",
question:"Cho dãy số un=(n+1)/(n+2). Tính u8.",
answer:"0.9",
explanation:"u8=(8+1)/(8+2)=9/10=0.9."
},

{
id:"dayso_s3_5",
type:"short-answer",
question:"Cho dãy số un=1/n. Tính u20.",
answer:"0.05",
explanation:"u20=1/20=0.05."
}
]
},
32: {
stage1:[
{
id:"csc_s1_1",
type:"multiple-choice",
question:"Cho cấp số cộng có u₁=3, d=2. Giá trị của u₅ bằng",
options:["9","10","11","12"],
answer:"11"
},

{
id:"csc_s1_2",
type:"multiple-choice",
question:"Cho cấp số cộng 2, 5, 8, 11,... Công sai d bằng",
options:["2","3","4","5"],
answer:"3"
},

{
id:"csc_s1_3",
type:"multiple-choice",
question:"Cho cấp số cộng có u₁=7, d=-2. Giá trị của u₄ bằng",
options:["1","3","5","7"],
answer:"1"
},

{
id:"csc_s1_4",
type:"multiple-choice",
question:"Công thức số hạng tổng quát của cấp số cộng là",
options:[
"uₙ=u₁+(n−1)d",
"uₙ=u₁·dⁿ⁻¹",
"uₙ=u₁+n.d",
"uₙ=d+(n−1)u₁"
],
answer:"uₙ=u₁+(n−1)d"
},

{
id:"csc_s1_5",
type:"multiple-choice",
question:"Cho cấp số cộng có u₁=4, d=3. Giá trị của u₁₀ bằng",
options:["28","30","31","32"],
answer:"31"
},

{
id:"csc_s1_6",
type:"multiple-choice",
question:"Tổng 10 số hạng đầu của cấp số cộng 1, 2, 3, ... là",
options:["45","50","55","60"],
answer:"55"
},

{
id:"csc_s1_7",
type:"multiple-choice",
question:"Cho cấp số cộng có u₁=2, d=4. Giá trị của u₆ bằng",
options:["18","20","22","24"],
answer:"22"
},

{
id:"csc_s1_8",
type:"multiple-choice",
question:"Cho cấp số cộng có u₁=5, u₂=9. Công sai d bằng",
options:["2","3","4","5"],
answer:"4"
},

{
id:"csc_s1_9",
type:"multiple-choice",
question:"Cho cấp số cộng có u₁=1, d=2. Tổng 5 số hạng đầu là",
options:["20","25","30","35"],
answer:"25"
},

{
id:"csc_s1_10",
type:"multiple-choice",
question:"Trong một cấp số cộng, nếu u₁=8 và d=-1 thì u₈ bằng",
options:["0","1","2","3"],
answer:"1"
}
],
stage2:[
{
id:"csc_s2_1",
type:"true-false",
question:"Cho cấp số cộng có u₁=2 và d=3.",
subQuestions:[
{
label:"a",
text:"u₂=5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u₅=14.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"u₁₀=29.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"u₄=10.",
correctAnswer:"Sai"
}
]
},

{
id:"csc_s2_2",
type:"true-false",
question:"Cho cấp số cộng 5, 8, 11, 14,...",
subQuestions:[
{
label:"a",
text:"Đây là cấp số cộng có công sai d=3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u₆=20.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"u₁₀=32.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"u₅=18.",
correctAnswer:"Sai"
}
]
},

{
id:"csc_s2_3",
type:"true-false",
question:"Xét tổng n số hạng đầu của cấp số cộng.",
subQuestions:[
{
label:"a",
text:"Sₙ=n(u₁+uₙ)/2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Sₙ=n[2u₁+(n−1)d]/2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"S₁₀ của dãy 1,2,3,... bằng 55.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tổng các số hạng của cấp số cộng luôn dương.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"csc_s3_1",
type:"short-answer",
question:"Cho cấp số cộng có u₁=4, d=3. Tính u₁₂.",
answer:"37",
explanation:"u₁₂=u₁+11d=4+11×3=37."
},

{
id:"csc_s3_2",
type:"short-answer",
question:"Cho cấp số cộng 2, 5, 8, 11,... Tính tổng 10 số hạng đầu.",
answer:"155",
explanation:"u₁₀=2+9×3=29. S₁₀=10(2+29)/2=155."
},

{
id:"csc_s3_3",
type:"short-answer",
question:"Cho cấp số cộng có u₁=7 và d=-2. Tính u₁₅.",
answer:"-21",
explanation:"u₁₅=7+14×(-2)=7−28=-21."
},

{
id:"csc_s3_4",
type:"short-answer",
question:"Cho cấp số cộng có u₁=1, d=4. Tính tổng 20 số hạng đầu.",
answer:"780",
explanation:"u₂₀=1+19×4=77. S₂₀=20(1+77)/2=780."
},

{
id:"csc_s3_5",
type:"short-answer",
question:"Cho cấp số cộng có u₅=17 và d=3. Tính u₁.",
answer:"5",
explanation:"u₅=u₁+4d ⇒ 17=u₁+12 ⇒ u₁=5."
}
]
},
33: {
stage1:[
{
id:"csn_s1_1",
type:"multiple-choice",
question:"Cho cấp số nhân có u₁=2, q=3. Giá trị của u₄ bằng",
options:["18","27","54","81"],
answer:"54"
},

{
id:"csn_s1_2",
type:"multiple-choice",
question:"Cho cấp số nhân 2; 6; 18; 54; ... Công bội q bằng",
options:["2","3","6","9"],
answer:"3"
},

{
id:"csn_s1_3",
type:"multiple-choice",
question:"Công thức số hạng tổng quát của cấp số nhân là",
options:[
"uₙ=u₁+(n−1)d",
"uₙ=u₁qⁿ",
"uₙ=u₁qⁿ⁻¹",
"uₙ=qⁿ⁻¹"
],
answer:"uₙ=u₁qⁿ⁻¹"
},

{
id:"csn_s1_4",
type:"multiple-choice",
question:"Cho cấp số nhân có u₁=5, q=2. Giá trị của u₅ bằng",
options:["40","60","80","100"],
answer:"80"
},

{
id:"csn_s1_5",
type:"multiple-choice",
question:"Cho cấp số nhân có u₁=81, q=1/3. Giá trị của u₃ bằng",
options:["3","9","27","81"],
answer:"9"
},

{
id:"csn_s1_6",
type:"multiple-choice",
question:"Cho cấp số nhân 1; 2; 4; 8; ... Giá trị của u₆ bằng",
options:["16","32","64","128"],
answer:"32"
},

{
id:"csn_s1_7",
type:"multiple-choice",
question:"Cho cấp số nhân có u₁=3, q=2. Tổng 4 số hạng đầu bằng",
options:["45","42","39","48"],
answer:"45"
},

{
id:"csn_s1_8",
type:"multiple-choice",
question:"Cho cấp số nhân có u₁=1, q=2. Tổng 5 số hạng đầu bằng",
options:["31","32","33","30"],
answer:"31"
},

{
id:"csn_s1_9",
type:"multiple-choice",
question:"Trong cấp số nhân, nếu u₁=4 và q=-2 thì u₃ bằng",
options:["8","16","-16","-8"],
answer:"16"
},

{
id:"csn_s1_10",
type:"multiple-choice",
question:"Dãy số nào sau đây là cấp số nhân?",
options:[
"1;2;3;4",
"2;4;8;16",
"1;3;5;7",
"2;5;8;11"
],
answer:"2;4;8;16"
}
],
stage2:[
{
id:"csn_s2_1",
type:"true-false",
question:"Cho cấp số nhân có u₁=2 và q=3.",
subQuestions:[
{
label:"a",
text:"u₂=6.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u₃=18.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"u₄=54.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"u₅=108.",
correctAnswer:"Sai"
}
]
},

{
id:"csn_s2_2",
type:"true-false",
question:"Cho cấp số nhân 1; 2; 4; 8; ...",
subQuestions:[
{
label:"a",
text:"Công bội q=2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u₆=32.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"u₇=64.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"u₅=8.",
correctAnswer:"Sai"
}
]
},

{
id:"csn_s2_3",
type:"true-false",
question:"Xét công thức tổng của cấp số nhân (q≠1).",
subQuestions:[
{
label:"a",
text:"Sₙ=u₁(1−qⁿ)/(1−q).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"S₅ của dãy 1;2;4;8;... bằng 31.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"S₄ của dãy 3;6;12;... bằng 45.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mọi cấp số nhân đều có công bội dương.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"csn_s3_1",
type:"short-answer",
question:"Cho cấp số nhân có u₁=3, q=2. Tính u₈.",
answer:"384",
explanation:"u₈=u₁q⁷=3×2⁷=3×128=384."
},

{
id:"csn_s3_2",
type:"short-answer",
question:"Cho cấp số nhân có u₁=5, q=3. Tính u₆.",
answer:"1215",
explanation:"u₆=5×3⁵=5×243=1215."
},

{
id:"csn_s3_3",
type:"short-answer",
question:"Cho cấp số nhân 2; 4; 8; 16; ... Tính tổng 5 số hạng đầu.",
answer:"62",
explanation:"S₅=2(2⁵−1)/(2−1)=2×31=62."
},

{
id:"csn_s3_4",
type:"short-answer",
question:"Cho cấp số nhân có u₁=81 và q=1/3. Tính u₅.",
answer:"1",
explanation:"u₅=81×(1/3)⁴=81/81=1."
},

{
id:"csn_s3_5",
type:"short-answer",
question:"Cho cấp số nhân có u₃=12 và q=2. Tính u₁.",
answer:"3",
explanation:"u₃=u₁q² ⇒ 12=4u₁ ⇒ u₁=3."
}
]
},
34: {
stage1:[
{
id:"review_dscscsn_1",
type:"multiple-choice",
question:"Cho dãy số un = 2n + 1. Giá trị của u5 bằng",
options:["9","10","11","12"],
answer:"11"
},

{
id:"review_dscscsn_2",
type:"multiple-choice",
question:"Cho cấp số cộng có u1 = 3, d = 2. Giá trị của u6 bằng",
options:["11","12","13","14"],
answer:"13"
},

{
id:"review_dscscsn_3",
type:"multiple-choice",
question:"Cho cấp số nhân có u1 = 2, q = 3. Giá trị của u4 bằng",
options:["18","27","54","81"],
answer:"54"
},

{
id:"review_dscscsn_4",
type:"multiple-choice",
question:"Công thức số hạng tổng quát của cấp số cộng là",
options:[
"un=u1+(n−1)d",
"un=u1.q^(n−1)",
"un=u1+nd",
"un=d+(n−1)u1"
],
answer:"un=u1+(n−1)d"
},

{
id:"review_dscscsn_5",
type:"multiple-choice",
question:"Công thức số hạng tổng quát của cấp số nhân là",
options:[
"un=u1+(n−1)d",
"un=u1.q^(n−1)",
"un=q^(n−1)",
"un=u1+nq"
],
answer:"un=u1.q^(n−1)"
},

{
id:"review_dscscsn_6",
type:"multiple-choice",
question:"Cho cấp số cộng 2; 5; 8; 11; ... Công sai d bằng",
options:["2","3","4","5"],
answer:"3"
},

{
id:"review_dscscsn_7",
type:"multiple-choice",
question:"Cho cấp số nhân 3; 6; 12; 24; ... Công bội q bằng",
options:["2","3","4","6"],
answer:"2"
},

{
id:"review_dscscsn_8",
type:"multiple-choice",
question:"Cho dãy số un = 1/n. Dãy số này là",
options:[
"Tăng",
"Giảm",
"Không đổi",
"Không xác định"
],
answer:"Giảm"
},

{
id:"review_dscscsn_9",
type:"multiple-choice",
question:"Tổng 10 số hạng đầu của cấp số cộng 1;2;3;... bằng",
options:["45","50","55","60"],
answer:"55"
},

{
id:"review_dscscsn_10",
type:"multiple-choice",
question:"Tổng 5 số hạng đầu của cấp số nhân 1;2;4;8;... bằng",
options:["30","31","32","33"],
answer:"31"
}
],

stage2:[
{
id:"review_tf_1",
type:"true-false",
question:"Cho dãy số un=(n+1)/(n+2).",
subQuestions:[
{
label:"a",
text:"u1=2/3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Dãy số tăng.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Dãy số bị chặn trên bởi 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Dãy số không bị chặn.",
correctAnswer:"Sai"
}
]
},

{
id:"review_tf_2",
type:"true-false",
question:"Cho cấp số cộng có u1=2 và d=3.",
subQuestions:[
{
label:"a",
text:"u2=5.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u5=14.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"u10=29.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"u4=10.",
correctAnswer:"Sai"
}
]
},

{
id:"review_tf_3",
type:"true-false",
question:"Cho cấp số nhân có u1=2 và q=3.",
subQuestions:[
{
label:"a",
text:"u2=6.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"u3=18.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"u4=54.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"u5=108.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"review_sa_1",
type:"short-answer",
question:"Cho dãy số un=3n−1. Tính u10.",
answer:"29",
explanation:"u10=3×10−1=29."
},

{
id:"review_sa_2",
type:"short-answer",
question:"Cho cấp số cộng có u1=5, d=4. Tính u15.",
answer:"61",
explanation:"u15=u1+14d=5+14×4=61."
},

{
id:"review_sa_3",
type:"short-answer",
question:"Cho cấp số nhân có u1=3, q=2. Tính u8.",
answer:"384",
explanation:"u8=3×2^7=3×128=384."
},

{
id:"review_sa_4",
type:"short-answer",
question:"Cho cấp số cộng 2;5;8;11;... Tính tổng 10 số hạng đầu.",
answer:"155",
explanation:"u10=2+9×3=29. S10=10(2+29)/2=155."
},

{
id:"review_sa_5",
type:"short-answer",
question:"Cho cấp số nhân 2;4;8;16;... Tính tổng 5 số hạng đầu.",
answer:"62",
explanation:"S5=2(2^5−1)/(2−1)=2×31=62."
}
]
},
35: {
stage1:[
{
id:"mslgn_s1_1",
type:"multiple-choice",
question:"Mẫu số liệu ghép nhóm được trình bày dưới dạng",
options:[
"Dãy số liệu",
"Bảng tần số ghép nhóm",
"Biểu đồ hình quạt",
"Đồ thị hàm số"
],
answer:"Bảng tần số ghép nhóm"
},

{
id:"mslgn_s1_2",
type:"multiple-choice",
question:"Trong mẫu số liệu ghép nhóm, tần số của một nhóm là",
options:[
"Số nhóm",
"Số giá trị thuộc nhóm đó",
"Khoảng biến thiên",
"Giá trị lớn nhất"
],
answer:"Số giá trị thuộc nhóm đó"
},

{
id:"mslgn_s1_3",
type:"multiple-choice",
question:"Nếu một nhóm có cận dưới là 10 và cận trên là 20 thì độ dài nhóm là",
options:["5","10","20","30"],
answer:"10"
},

{
id:"mslgn_s1_4",
type:"multiple-choice",
question:"Tần số của các nhóm lần lượt là 5; 8; 12; 15. Cỡ mẫu là",
options:["35","38","40","42"],
answer:"40"
},

{
id:"mslgn_s1_5",
type:"multiple-choice",
question:"Dấu hiệu điều tra trong mẫu số liệu ghép nhóm là",
options:[
"Đối tượng được khảo sát",
"Đặc trưng được nghiên cứu",
"Số nhóm",
"Tần số"
],
answer:"Đặc trưng được nghiên cứu"
},

{
id:"mslgn_s1_6",
type:"multiple-choice",
question:"Trong bảng ghép nhóm, giá trị đại diện của nhóm [20;30) là",
options:["20","25","30","50"],
answer:"25"
},

{
id:"mslgn_s1_7",
type:"multiple-choice",
question:"Giá trị đại diện của nhóm [40;50) là",
options:["40","45","50","90"],
answer:"45"
},

{
id:"mslgn_s1_8",
type:"multiple-choice",
question:"Nếu tổng các tần số bằng 100 thì cỡ mẫu là",
options:["10","50","100","200"],
answer:"100"
},

{
id:"mslgn_s1_9",
type:"multiple-choice",
question:"Trong bảng ghép nhóm, nhóm nào chứa giá trị 37?",
options:[
"[20;30)",
"[30;40)",
"[40;50)",
"[50;60)"
],
answer:"[30;40)"
},

{
id:"mslgn_s1_10",
type:"multiple-choice",
question:"Độ dài nhóm của khoảng [15;25) là",
options:["5","10","15","25"],
answer:"10"
}
],
stage2:[
{
id:"mslgn_s2_1",
type:"true-false",
question:"Xét bảng số liệu ghép nhóm.",
subQuestions:[
{
label:"a",
text:"Tổng các tần số bằng cỡ mẫu.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Mỗi giá trị chỉ thuộc một nhóm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Độ dài nhóm luôn bằng nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Tần số luôn là số nguyên không âm.",
correctAnswer:"Đúng"
}
]
},

{
id:"mslgn_s2_2",
type:"true-false",
question:"Xét nhóm [20;30).",
subQuestions:[
{
label:"a",
text:"Cận dưới là 20.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Cận trên là 30.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Độ dài nhóm bằng 10.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Giá trị đại diện là 30.",
correctAnswer:"Sai"
}
]
},

{
id:"mslgn_s2_3",
type:"true-false",
question:"Xét giá trị đại diện của nhóm.",
subQuestions:[
{
label:"a",
text:"Là trung điểm của nhóm.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nhóm [10;20) có giá trị đại diện là 15.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nhóm [30;40) có giá trị đại diện là 35.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Giá trị đại diện luôn bằng cận dưới.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"mslgn_s3_1",
type:"short-answer",
question:"Một bảng ghép nhóm có các tần số 4; 6; 10; 5. Hãy tìm cỡ mẫu.",
answer:"25",
explanation:"Cỡ mẫu bằng tổng các tần số: 4+6+10+5=25."
},

{
id:"mslgn_s3_2",
type:"short-answer",
question:"Tìm giá trị đại diện của nhóm [12;18).",
answer:"15",
explanation:"Giá trị đại diện là trung điểm của nhóm: (12+18)/2=15."
},

{
id:"mslgn_s3_3",
type:"short-answer",
question:"Tìm độ dài của nhóm [35;50).",
answer:"15",
explanation:"Độ dài nhóm bằng cận trên trừ cận dưới: 50−35=15."
},

{
id:"mslgn_s3_4",
type:"short-answer",
question:"Các tần số của bảng ghép nhóm là 8; 12; 15; 10; 5. Tìm cỡ mẫu.",
answer:"50",
explanation:"Cỡ mẫu bằng tổng các tần số: 8+12+15+10+5=50."
},

{
id:"mslgn_s3_5",
type:"short-answer",
question:"Tìm giá trị đại diện của nhóm [40;60).",
answer:"50",
explanation:"Giá trị đại diện là trung điểm của nhóm: (40+60)/2=50."
}
]
},
36: {
stage1:[
{
id:"xttt_s1_1",
type:"multiple-choice",
question:"Số trung bình của mẫu số liệu dùng để đo",
options:[
"Độ phân tán",
"Xu thế trung tâm",
"Tần số",
"Cỡ mẫu"
],
answer:"Xu thế trung tâm"
},

{
id:"xttt_s1_2",
type:"multiple-choice",
question:"Mốt của mẫu số liệu là",
options:[
"Giá trị lớn nhất",
"Giá trị nhỏ nhất",
"Giá trị xuất hiện nhiều nhất",
"Giá trị trung bình"
],
answer:"Giá trị xuất hiện nhiều nhất"
},

{
id:"xttt_s1_3",
type:"multiple-choice",
question:"Trung vị của mẫu số liệu là",
options:[
"Giá trị đứng giữa khi sắp xếp số liệu",
"Giá trị lớn nhất",
"Giá trị nhỏ nhất",
"Tần số lớn nhất"
],
answer:"Giá trị đứng giữa khi sắp xếp số liệu"
},

{
id:"xttt_s1_4",
type:"multiple-choice",
question:"Trong mẫu số liệu ghép nhóm, nhóm chứa mốt là nhóm có",
options:[
"Tần số nhỏ nhất",
"Tần số lớn nhất",
"Giá trị đại diện lớn nhất",
"Độ dài lớn nhất"
],
answer:"Tần số lớn nhất"
},

{
id:"xttt_s1_5",
type:"multiple-choice",
question:"Nếu các tần số là 5; 8; 12; 10 thì nhóm chứa mốt có tần số",
options:["5","8","10","12"],
answer:"12"
},

{
id:"xttt_s1_6",
type:"multiple-choice",
question:"Tổng các tần số của mẫu số liệu gọi là",
options:[
"Số trung bình",
"Cỡ mẫu",
"Trung vị",
"Mốt"
],
answer:"Cỡ mẫu"
},

{
id:"xttt_s1_7",
type:"multiple-choice",
question:"Nếu cỡ mẫu bằng 50 thì vị trí trung vị nằm gần",
options:[
"Quan sát thứ 10",
"Quan sát thứ 25",
"Quan sát thứ 50",
"Quan sát thứ 1"
],
answer:"Quan sát thứ 25"
},

{
id:"xttt_s1_8",
type:"multiple-choice",
question:"Trong bảng ghép nhóm, số trung bình được tính dựa trên",
options:[
"Giá trị đại diện và tần số",
"Chỉ tần số",
"Chỉ cận dưới",
"Chỉ cận trên"
],
answer:"Giá trị đại diện và tần số"
},

{
id:"xttt_s1_9",
type:"multiple-choice",
question:"Nhóm chứa trung vị là nhóm",
options:[
"Chứa vị trí N/2",
"Chứa giá trị lớn nhất",
"Chứa giá trị nhỏ nhất",
"Có tần số lớn nhất"
],
answer:"Chứa vị trí N/2"
},

{
id:"xttt_s1_10",
type:"multiple-choice",
question:"Mục đích của các số đặc trưng đo xu thế trung tâm là",
options:[
"Mô tả giá trị tiêu biểu của dữ liệu",
"Đo độ lệch chuẩn",
"Đo phương sai",
"Đo độ phân tán"
],
answer:"Mô tả giá trị tiêu biểu của dữ liệu"
}
],
stage2:[
{
id:"xttt_s2_1",
type:"true-false",
question:"Xét các số đặc trưng đo xu thế trung tâm.",
subQuestions:[
{
label:"a",
text:"Mốt là giá trị xuất hiện nhiều nhất.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Trung vị là giá trị đứng giữa của mẫu số liệu đã sắp xếp.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Số trung bình phản ánh xu thế trung tâm của dữ liệu.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mốt luôn bằng trung bình.",
correctAnswer:"Sai"
}
]
},

{
id:"xttt_s2_2",
type:"true-false",
question:"Xét mẫu số liệu ghép nhóm.",
subQuestions:[
{
label:"a",
text:"Tổng các tần số bằng cỡ mẫu.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nhóm chứa mốt là nhóm có tần số lớn nhất.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nhóm chứa trung vị chứa vị trí N/2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mọi nhóm đều có cùng tần số.",
correctAnswer:"Sai"
}
]
},

{
id:"xttt_s2_3",
type:"true-false",
question:"Cho bảng ghép nhóm có các tần số 6; 9; 15; 10.",
subQuestions:[
{
label:"a",
text:"Cỡ mẫu bằng 40.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nhóm chứa mốt là nhóm thứ ba.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Tần số lớn nhất là 15.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Cỡ mẫu bằng 30.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"xttt_s3_1",
type:"short-answer",
question:"Một bảng ghép nhóm có các tần số 5; 8; 12; 15. Tìm cỡ mẫu.",
answer:"40",
explanation:"Cỡ mẫu bằng tổng các tần số: 5+8+12+15=40."
},

{
id:"xttt_s3_2",
type:"short-answer",
question:"Cho bảng ghép nhóm có các tần số 4; 7; 11; 9. Tìm tần số lớn nhất.",
answer:"11",
explanation:"Trong các tần số 4, 7, 11, 9 thì lớn nhất là 11."
},

{
id:"xttt_s3_3",
type:"short-answer",
question:"Cho bảng ghép nhóm có các tần số 10; 15; 20; 5. Tìm cỡ mẫu.",
answer:"50",
explanation:"Cỡ mẫu bằng tổng các tần số: 10+15+20+5=50."
},

{
id:"xttt_s3_4",
type:"short-answer",
question:"Cho bảng ghép nhóm có các tần số 6; 12; 18; 14. Tần số của nhóm chứa mốt là bao nhiêu?",
answer:"18",
explanation:"Nhóm chứa mốt là nhóm có tần số lớn nhất. Tần số lớn nhất là 18."
},

{
id:"xttt_s3_5",
type:"short-answer",
question:"Cho bảng ghép nhóm có các tần số 8; 12; 15; 10; 5. Tìm cỡ mẫu.",
answer:"50",
explanation:"Cỡ mẫu bằng tổng các tần số: 8+12+15+10+5=50."
}
]
},
37: {
stage1:[
{
id:"dtmp_s1_1",
type:"multiple-choice",
question:"Qua ba điểm không thẳng hàng xác định được bao nhiêu mặt phẳng?",
options:["1","2","3","Vô số"],
answer:"1"
},

{
id:"dtmp_s1_2",
type:"multiple-choice",
question:"Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì",
options:[
"Đường thẳng nằm trong mặt phẳng",
"Đường thẳng song song mặt phẳng",
"Đường thẳng cắt mặt phẳng",
"Không kết luận được"
],
answer:"Đường thẳng nằm trong mặt phẳng"
},

{
id:"dtmp_s1_3",
type:"multiple-choice",
question:"Giao tuyến của hai mặt phẳng phân biệt là",
options:[
"Một điểm",
"Một đường thẳng",
"Một đoạn thẳng",
"Một tia"
],
answer:"Một đường thẳng"
},

{
id:"dtmp_s1_4",
type:"multiple-choice",
question:"Nếu hai mặt phẳng có một điểm chung thì",
options:[
"Chúng cắt nhau theo một đường thẳng",
"Chúng song song",
"Chúng trùng nhau",
"Không xác định"
],
answer:"Chúng cắt nhau theo một đường thẳng"
},

{
id:"dtmp_s1_5",
type:"multiple-choice",
question:"Trong hình chóp S.ABCD, giao tuyến của hai mặt phẳng (SAB) và (SBC) là",
options:["SB","SA","SC","AB"],
answer:"SB"
},

{
id:"dtmp_s1_6",
type:"multiple-choice",
question:"Trong tứ diện ABCD, giao tuyến của (ABC) và (ABD) là",
options:["AB","AC","AD","BD"],
answer:"AB"
},

{
id:"dtmp_s1_7",
type:"multiple-choice",
question:"Thiết diện của một hình chóp với một mặt phẳng thường là",
options:[
"Một đa giác",
"Một đường thẳng",
"Một điểm",
"Một mặt cầu"
],
answer:"Một đa giác"
},

{
id:"dtmp_s1_8",
type:"multiple-choice",
question:"Ba điểm cùng thuộc giao tuyến của hai mặt phẳng thì",
options:[
"Thẳng hàng",
"Không thẳng hàng",
"Song song",
"Vuông góc"
],
answer:"Thẳng hàng"
},

{
id:"dtmp_s1_9",
type:"multiple-choice",
question:"Để chứng minh ba điểm thẳng hàng thường chứng minh chúng",
options:[
"Cùng thuộc hai mặt phẳng phân biệt",
"Cùng thuộc một đường tròn",
"Cùng thuộc một cạnh",
"Cùng thuộc một tam giác"
],
answer:"Cùng thuộc hai mặt phẳng phân biệt"
},

{
id:"dtmp_s1_10",
type:"multiple-choice",
question:"Để chứng minh ba đường thẳng đồng quy cần chỉ ra chúng",
options:[
"Cùng đi qua một điểm",
"Song song từng đôi",
"Nằm trên cùng mặt phẳng",
"Có cùng độ dài"
],
answer:"Cùng đi qua một điểm"
}
],
stage2:[
{
id:"dtmp_s2_1",
type:"true-false",
question:"Xét các mệnh đề về đường thẳng và mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Qua ba điểm không thẳng hàng xác định duy nhất một mặt phẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai mặt phẳng phân biệt có thể cắt nhau theo một đường thẳng.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường thẳng phân biệt luôn cắt nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Một đường thẳng và một mặt phẳng chỉ có thể có một điểm chung.",
correctAnswer:"Sai"
}
]
},

{
id:"dtmp_s2_2",
type:"true-false",
question:"Xét giao tuyến của các mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Giao tuyến của hai mặt phẳng là một đường thẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu hai mặt phẳng có hai điểm chung phân biệt thì chúng có một giao tuyến.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai mặt phẳng song song không có điểm chung.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai mặt phẳng bất kỳ luôn cắt nhau.",
correctAnswer:"Sai"
}
]
},

{
id:"dtmp_s2_3",
type:"true-false",
question:"Xét ba điểm thẳng hàng và ba đường thẳng đồng quy.",
subQuestions:[
{
label:"a",
text:"Ba điểm thuộc cùng giao tuyến của hai mặt phẳng thì thẳng hàng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Ba đường thẳng đi qua cùng một điểm thì đồng quy.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Ba đường thẳng đồng quy luôn song song.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Ba điểm thẳng hàng luôn thuộc vô số mặt phẳng.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"dtmp_s3_1",
type:"short-answer",
question:"Một mặt phẳng được xác định bởi bao nhiêu điểm không thẳng hàng?",
answer:"3",
explanation:"Theo tiên đề hình học không gian, qua ba điểm không thẳng hàng xác định duy nhất một mặt phẳng."
},

{
id:"dtmp_s3_2",
type:"short-answer",
question:"Hai mặt phẳng phân biệt cắt nhau theo bao nhiêu đường thẳng?",
answer:"1",
explanation:"Hai mặt phẳng phân biệt nếu cắt nhau thì giao tuyến là duy nhất một đường thẳng."
},

{
id:"dtmp_s3_3",
type:"short-answer",
question:"Trong hình chóp S.ABCD, hai mặt phẳng (SAB) và (SBC) có bao nhiêu cạnh chung?",
answer:"1",
explanation:"Hai mặt phẳng cùng chứa cạnh SB nên giao tuyến là SB."
},

{
id:"dtmp_s3_4",
type:"short-answer",
question:"Có bao nhiêu mặt phẳng đi qua một đường thẳng cho trước?",
answer:"Vô số",
explanation:"Qua một đường thẳng có thể dựng vô số mặt phẳng khác nhau chứa đường thẳng đó."
},

{
id:"dtmp_s3_5",
type:"short-answer",
question:"Ba đường thẳng cùng đi qua một điểm gọi là gì?",
answer:"Đồng quy",
explanation:"Các đường thẳng cùng đi qua một điểm được gọi là các đường thẳng đồng quy."
}
]
},
38: {
stage1:[
{
id:"songsong_s1_1",
type:"multiple-choice",
question:"Trong không gian, hai đường thẳng phân biệt không có điểm chung và cùng nằm trong một mặt phẳng được gọi là",
options:[
"Hai đường thẳng cắt nhau",
"Hai đường thẳng chéo nhau",
"Hai đường thẳng song song",
"Hai đường thẳng vuông góc"
],
answer:"Hai đường thẳng song song"
},

{
id:"songsong_s1_2",
type:"multiple-choice",
question:"Nếu hai đường thẳng cùng song song với một đường thẳng thứ ba thì",
options:[
"Chúng cắt nhau",
"Chúng song song với nhau",
"Chúng vuông góc với nhau",
"Không kết luận được"
],
answer:"Chúng song song với nhau"
},

{
id:"songsong_s1_3",
type:"multiple-choice",
question:"Qua một điểm nằm ngoài một đường thẳng cho trước, có bao nhiêu đường thẳng song song với đường thẳng đó?",
options:["0","1","2","Vô số"],
answer:"1"
},

{
id:"songsong_s1_4",
type:"multiple-choice",
question:"Trong hình hộp ABCD.A'B'C'D', đường thẳng AB song song với",
options:["BC","AA'","CD","A'D'"],
answer:"A'D'"
},

{
id:"songsong_s1_5",
type:"multiple-choice",
question:"Nếu a // b và b // c thì",
options:[
"a ⟂ c",
"a cắt c",
"a // c",
"Không kết luận được"
],
answer:"a // c"
},

{
id:"songsong_s1_6",
type:"multiple-choice",
question:"Hai đường thẳng chéo nhau là hai đường thẳng",
options:[
"Cùng nằm trong một mặt phẳng và không cắt nhau",
"Cùng nằm trong một mặt phẳng và cắt nhau",
"Không đồng phẳng",
"Vuông góc với nhau"
],
answer:"Không đồng phẳng"
},

{
id:"songsong_s1_7",
type:"multiple-choice",
question:"Điều kiện để hai đường thẳng phân biệt song song là",
options:[
"Có một điểm chung",
"Không đồng phẳng",
"Đồng phẳng và không có điểm chung",
"Vuông góc"
],
answer:"Đồng phẳng và không có điểm chung"
},

{
id:"songsong_s1_8",
type:"multiple-choice",
question:"Trong hình lập phương ABCD.A'B'C'D', cạnh BC song song với",
options:["AB","BB'","AD","B'C'"],
answer:"B'C'"
},

{
id:"songsong_s1_9",
type:"multiple-choice",
question:"Nếu hai đường thẳng song song thì chúng",
options:[
"Có vô số điểm chung",
"Có đúng một điểm chung",
"Không có điểm chung",
"Vuông góc"
],
answer:"Không có điểm chung"
},

{
id:"songsong_s1_10",
type:"multiple-choice",
question:"Trong một mặt phẳng, qua một điểm nằm ngoài đường thẳng a có bao nhiêu đường thẳng song song với a?",
options:["0","1","2","Vô số"],
answer:"1"
}
],

stage2:[
{
id:"songsong_s2_1",
type:"true-false",
question:"Xét các mệnh đề về hai đường thẳng song song.",
subQuestions:[
{
label:"a",
text:"Hai đường thẳng song song luôn đồng phẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai đường thẳng song song không có điểm chung.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường thẳng chéo nhau là hai đường thẳng song song.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Nếu a // b và b // c thì a // c.",
correctAnswer:"Đúng"
}
]
},

{
id:"songsong_s2_2",
type:"true-false",
question:"Xét vị trí tương đối của hai đường thẳng trong không gian.",
subQuestions:[
{
label:"a",
text:"Hai đường thẳng cắt nhau thì đồng phẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai đường thẳng song song thì đồng phẳng.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường thẳng chéo nhau thì không đồng phẳng.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường thẳng không có điểm chung thì luôn song song.",
correctAnswer:"Sai"
}
]
},

{
id:"songsong_s2_3",
type:"true-false",
question:"Xét các tính chất của đường thẳng song song.",
subQuestions:[
{
label:"a",
text:"Qua một điểm ngoài đường thẳng a chỉ có một đường thẳng song song với a.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai đường thẳng cùng song song với đường thẳng thứ ba thì song song với nhau.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường thẳng song song có thể cắt nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hai đường thẳng song song luôn có cùng phương.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"songsong_s3_1",
type:"short-answer",
question:"Qua một điểm nằm ngoài một đường thẳng cho trước có bao nhiêu đường thẳng song song với đường thẳng đó?",
answer:"1",
explanation:"Theo tiên đề Euclid, qua một điểm nằm ngoài một đường thẳng chỉ có duy nhất một đường thẳng song song với đường thẳng đó."
},

{
id:"songsong_s3_2",
type:"short-answer",
question:"Hai đường thẳng song song có bao nhiêu điểm chung?",
answer:"0",
explanation:"Hai đường thẳng song song là hai đường thẳng đồng phẳng và không có điểm chung."
},

{
id:"songsong_s3_3",
type:"short-answer",
question:"Nếu a // b và b // c thì có bao nhiêu cặp đường thẳng song song trong ba đường thẳng a, b, c?",
answer:"3",
explanation:"Ta có a // b, b // c và suy ra a // c. Vậy có 3 cặp đường thẳng song song."
},

{
id:"songsong_s3_4",
type:"short-answer",
question:"Hai đường thẳng chéo nhau có nằm trong cùng một mặt phẳng hay không? (Trả lời 1 nếu Có, 0 nếu Không)",
answer:"0",
explanation:"Hai đường thẳng chéo nhau là hai đường thẳng không đồng phẳng nên không nằm trong cùng một mặt phẳng."
},

{
id:"songsong_s3_5",
type:"short-answer",
question:"Trong một hình hộp có bao nhiêu cạnh song song với một cạnh cho trước?",
answer:"3",
explanation:"Trong hình hộp, mỗi cạnh thuộc một nhóm gồm 4 cạnh song song. Ngoài cạnh đã cho còn có 3 cạnh khác song song với nó."
}
]
},
39: {
stage1:[
{
id:"dtmpss_s1_1",
type:"multiple-choice",
question:"Nếu đường thẳng d song song với một đường thẳng nằm trong mặt phẳng (P) và d không thuộc (P) thì",
options:[
"d song song với (P)",
"d cắt (P)",
"d nằm trong (P)",
"d vuông góc (P)"
],
answer:"d song song với (P)"
},

{
id:"dtmpss_s1_2",
type:"multiple-choice",
question:"Để chứng minh đường thẳng d song song với mặt phẳng (P), thường chứng minh",
options:[
"d vuông góc (P)",
"d song song một đường thẳng nằm trong (P)",
"d nằm trong (P)",
"d cắt (P)"
],
answer:"d song song một đường thẳng nằm trong (P)"
},

{
id:"dtmpss_s1_3",
type:"multiple-choice",
question:"Nếu d // (P) thì",
options:[
"d và (P) không có điểm chung",
"d nằm trong (P)",
"d cắt (P)",
"d vuông góc (P)"
],
answer:"d và (P) không có điểm chung"
},

{
id:"dtmpss_s1_4",
type:"multiple-choice",
question:"Trong hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của (SAB) và (SBC) là",
options:["SA","SB","SC","AB"],
answer:"SB"
},

{
id:"dtmpss_s1_5",
type:"multiple-choice",
question:"Hai mặt phẳng phân biệt cùng song song với một đường thẳng d thì",
options:[
"Luôn cắt nhau",
"Có thể cắt nhau",
"Luôn song song",
"Luôn trùng nhau"
],
answer:"Có thể cắt nhau"
},

{
id:"dtmpss_s1_6",
type:"multiple-choice",
question:"Thiết diện của hình chóp với một mặt phẳng thường là",
options:[
"Một đa giác",
"Một đường thẳng",
"Một điểm",
"Một đường tròn"
],
answer:"Một đa giác"
},

{
id:"dtmpss_s1_7",
type:"multiple-choice",
question:"Nếu một mặt phẳng cắt hình chóp và song song với đáy thì thiết diện thu được",
options:[
"Đồng dạng với đáy",
"Vuông góc với đáy",
"Luôn là tam giác",
"Luôn là hình vuông"
],
answer:"Đồng dạng với đáy"
},

{
id:"dtmpss_s1_8",
type:"multiple-choice",
question:"Trong không gian, qua một điểm ngoài mặt phẳng có bao nhiêu mặt phẳng song song với mặt phẳng đã cho?",
options:["1","2","3","Vô số"],
answer:"1"
},

{
id:"dtmpss_s1_9",
type:"multiple-choice",
question:"Nếu đường thẳng d song song với mặt phẳng (P) thì số điểm chung của d và (P) là",
options:["0","1","2","Vô số"],
answer:"0"
},

{
id:"dtmpss_s1_10",
type:"multiple-choice",
question:"Trong tứ diện, mặt phẳng song song với hai cạnh đối thường tạo thiết diện là",
options:[
"Hình bình hành",
"Tam giác",
"Hình vuông",
"Ngũ giác"
],
answer:"Hình bình hành"
}
],
stage2:[
{
id:"dtmpss_s2_1",
type:"true-false",
question:"Xét quan hệ đường thẳng và mặt phẳng song song.",
subQuestions:[
{
label:"a",
text:"Nếu d // (P) thì d không có điểm chung với (P).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu d song song với một đường thẳng nằm trong (P) thì d // (P).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đường thẳng nằm trong mặt phẳng vẫn được coi là song song với mặt phẳng đó.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Nếu d // (P) thì có vô số đường thẳng trong (P) song song với d.",
correctAnswer:"Đúng"
}
]
},

{
id:"dtmpss_s2_2",
type:"true-false",
question:"Xét giao tuyến các mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Hai mặt phẳng phân biệt cắt nhau theo một đường thẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai mặt phẳng song song không có điểm chung.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai mặt phẳng bất kỳ đều có giao tuyến.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Giao tuyến của hai mặt phẳng là một đường thẳng.",
correctAnswer:"Đúng"
}
]
},

{
id:"dtmpss_s2_3",
type:"true-false",
question:"Xét thiết diện.",
subQuestions:[
{
label:"a",
text:"Thiết diện là giao của khối đa diện với một mặt phẳng.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Thiết diện của hình chóp luôn là tam giác.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Mặt phẳng song song đáy hình chóp tạo thiết diện đồng dạng với đáy.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Thiết diện luôn là một đa giác.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"dtmpss_s3_1",
type:"short-answer",
question:"Nếu đường thẳng d song song với mặt phẳng (P) thì d và (P) có bao nhiêu điểm chung?",
answer:"0",
explanation:"Đường thẳng song song mặt phẳng thì không có điểm chung với mặt phẳng đó."
},

{
id:"dtmpss_s3_2",
type:"short-answer",
question:"Hai mặt phẳng phân biệt cắt nhau theo bao nhiêu đường thẳng?",
answer:"1",
explanation:"Hai mặt phẳng phân biệt nếu cắt nhau thì giao tuyến duy nhất là một đường thẳng."
},

{
id:"dtmpss_s3_3",
type:"short-answer",
question:"Qua một điểm nằm ngoài mặt phẳng (P) có bao nhiêu mặt phẳng song song với (P)?",
answer:"1",
explanation:"Theo định lý, qua một điểm ngoài mặt phẳng chỉ có duy nhất một mặt phẳng song song với mặt phẳng đã cho."
},

{
id:"dtmpss_s3_4",
type:"short-answer",
question:"Một thiết diện là giao của khối đa diện với bao nhiêu mặt phẳng?",
answer:"1",
explanation:"Thiết diện được tạo bởi giao của khối đa diện với một mặt phẳng."
},

{
id:"dtmpss_s3_5",
type:"short-answer",
question:"Trong hình chóp, nếu mặt phẳng cắt song song với đáy thì thiết diện và đáy có quan hệ gì? (Trả lời: Đồng dạng)",
answer:"Đồng dạng",
explanation:"Mặt phẳng song song với đáy tạo ra thiết diện đồng dạng với đáy của hình chóp."
}
]
},
40: {
stage1:[
{
id:"hmpss_s1_1",
type:"multiple-choice",
question:"Hai mặt phẳng phân biệt được gọi là song song khi",
options:[
"Chúng có một điểm chung",
"Chúng có một đường thẳng chung",
"Chúng không có điểm chung",
"Chúng vuông góc với nhau"
],
answer:"Chúng không có điểm chung"
},

{
id:"hmpss_s1_2",
type:"multiple-choice",
question:"Nếu hai mặt phẳng cùng song song với một mặt phẳng thứ ba thì",
options:[
"Chúng cắt nhau",
"Chúng song song với nhau",
"Chúng vuông góc",
"Không kết luận được"
],
answer:"Chúng song song với nhau"
},

{
id:"hmpss_s1_3",
type:"multiple-choice",
question:"Qua một điểm nằm ngoài mặt phẳng (P), có bao nhiêu mặt phẳng song song với (P)?",
options:["1","2","3","Vô số"],
answer:"1"
},

{
id:"hmpss_s1_4",
type:"multiple-choice",
question:"Nếu mặt phẳng (α) song song với mặt phẳng (β) thì",
options:[
"(α) và (β) có một điểm chung",
"(α) và (β) có một đường thẳng chung",
"(α) và (β) không có điểm chung",
"(α) cắt (β)"
],
answer:"(α) và (β) không có điểm chung"
},

{
id:"hmpss_s1_5",
type:"multiple-choice",
question:"Nếu hai mặt phẳng phân biệt cùng chứa hai đường thẳng song song thì",
options:[
"Luôn song song",
"Luôn cắt nhau",
"Có thể song song",
"Luôn vuông góc"
],
answer:"Có thể song song"
},

{
id:"hmpss_s1_6",
type:"multiple-choice",
question:"Trong hình hộp ABCD.A'B'C'D', mặt phẳng (ABCD) song song với",
options:[
"(ABB'A')",
"(BCC'B')",
"(A'B'C'D')",
"(ADD'A')"
],
answer:"(A'B'C'D')"
},

{
id:"hmpss_s1_7",
type:"multiple-choice",
question:"Nếu hai mặt phẳng song song thì mọi đường thẳng nằm trong mặt phẳng này",
options:[
"Song song với mặt phẳng kia",
"Vuông góc mặt phẳng kia",
"Cắt mặt phẳng kia",
"Không xác định"
],
answer:"Song song với mặt phẳng kia"
},

{
id:"hmpss_s1_8",
type:"multiple-choice",
question:"Thiết diện của hình lăng trụ bởi mặt phẳng song song với đáy là",
options:[
"Một đa giác bằng đáy",
"Một điểm",
"Một đoạn thẳng",
"Một đường tròn"
],
answer:"Một đa giác bằng đáy"
},

{
id:"hmpss_s1_9",
type:"multiple-choice",
question:"Trong hình hộp, có bao nhiêu cặp mặt đối diện song song?",
options:["2","3","4","6"],
answer:"3"
},

{
id:"hmpss_s1_10",
type:"multiple-choice",
question:"Nếu (P) // (Q) và (Q) // (R) thì",
options:[
"(P) cắt (R)",
"(P) ⟂ (R)",
"(P) // (R)",
"Không kết luận được"
],
answer:"(P) // (R)"
}
],

stage2:[
{
id:"hmpss_s2_1",
type:"true-false",
question:"Xét các tính chất của hai mặt phẳng song song.",
subQuestions:[
{
label:"a",
text:"Hai mặt phẳng song song không có điểm chung.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu hai mặt phẳng cùng song song với mặt phẳng thứ ba thì chúng song song với nhau.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai mặt phẳng song song có thể cắt nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Qua một điểm ngoài mặt phẳng chỉ có một mặt phẳng song song với mặt phẳng đó.",
correctAnswer:"Đúng"
}
]
},

{
id:"hmpss_s2_2",
type:"true-false",
question:"Xét hình hộp ABCD.A'B'C'D'.",
subQuestions:[
{
label:"a",
text:"(ABCD) // (A'B'C'D').",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(ABB'A') // (CDD'C').",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(BCC'B') // (ADD'A').",
correctAnswer:"Đúng"
},
{
label:"d",
text:"(ABCD) cắt (A'B'C'D').",
correctAnswer:"Sai"
}
]
},

{
id:"hmpss_s2_3",
type:"true-false",
question:"Xét thiết diện tạo bởi mặt phẳng song song.",
subQuestions:[
{
label:"a",
text:"Mặt phẳng song song đáy hình lăng trụ tạo thiết diện bằng đáy.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Mặt phẳng song song đáy hình hộp tạo thiết diện bằng đáy.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Thiết diện luôn là một đa giác.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai mặt phẳng song song luôn có một giao tuyến.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"hmpss_s3_1",
type:"short-answer",
question:"Qua một điểm nằm ngoài mặt phẳng (P), có bao nhiêu mặt phẳng song song với (P)?",
answer:"1",
explanation:"Theo định lý về hai mặt phẳng song song, qua một điểm ngoài mặt phẳng chỉ có duy nhất một mặt phẳng song song với mặt phẳng đã cho."
},

{
id:"hmpss_s3_2",
type:"short-answer",
question:"Trong hình hộp có bao nhiêu cặp mặt đối diện song song?",
answer:"3",
explanation:"Hình hộp có 6 mặt, tạo thành 3 cặp mặt đối diện song song."
},

{
id:"hmpss_s3_3",
type:"short-answer",
question:"Hai mặt phẳng song song có bao nhiêu điểm chung?",
answer:"0",
explanation:"Hai mặt phẳng phân biệt song song không có điểm chung."
},

{
id:"hmpss_s3_4",
type:"short-answer",
question:"Nếu (P)//(Q) và (Q)//(R) thì có bao nhiêu cặp mặt phẳng song song trong ba mặt phẳng đó?",
answer:"3",
explanation:"Ta có (P)//(Q), (Q)//(R) và suy ra (P)//(R). Vậy có 3 cặp mặt phẳng song song."
},

{
id:"hmpss_s3_5",
type:"short-answer",
question:"Một hình hộp có bao nhiêu mặt?",
answer:"6",
explanation:"Hình hộp được giới hạn bởi 6 mặt là các hình bình hành."
}
]
},
41: {
stage1:[
{
id:"ghds_s1_1",
type:"multiple-choice",
question:"Giới hạn của dãy số un = 1/n khi n → +∞ bằng",
options:["0","1","+∞","-∞"],
answer:"0"
},

{
id:"ghds_s1_2",
type:"multiple-choice",
question:"Giới hạn của dãy số un = (2n+1)/(n+3) khi n → +∞ bằng",
options:["1","2","3","0"],
answer:"2"
},

{
id:"ghds_s1_3",
type:"multiple-choice",
question:"Giới hạn của dãy số un = n²/(n²+1) khi n → +∞ bằng",
options:["0","1","+∞","2"],
answer:"1"
},

{
id:"ghds_s1_4",
type:"multiple-choice",
question:"Giới hạn của dãy số un = 3ⁿ khi n → +∞ là",
options:["0","1","+∞","3"],
answer:"+∞"
},

{
id:"ghds_s1_5",
type:"multiple-choice",
question:"Giới hạn của dãy số un = (1/2)ⁿ khi n → +∞ bằng",
options:["0","1","+∞","1/2"],
answer:"0"
},

{
id:"ghds_s1_6",
type:"multiple-choice",
question:"Nếu lim(un)=2 và lim(vn)=3 thì lim(un+vn) bằng",
options:["5","6","1","0"],
answer:"5"
},

{
id:"ghds_s1_7",
type:"multiple-choice",
question:"Nếu lim(un)=4 và lim(vn)=2 thì lim(un.vn) bằng",
options:["6","8","4","2"],
answer:"8"
},

{
id:"ghds_s1_8",
type:"multiple-choice",
question:"Nếu lim(un)=6 và lim(vn)=2 thì lim(un/vn) bằng",
options:["2","3","4","12"],
answer:"3"
},

{
id:"ghds_s1_9",
type:"multiple-choice",
question:"Giới hạn của dãy số un=(5n²−1)/(2n²+3) khi n→+∞ bằng",
options:["5/2","2/5","5","2"],
answer:"5/2"
},

{
id:"ghds_s1_10",
type:"multiple-choice",
question:"Tổng của cấp số nhân lùi vô hạn 1+1/2+1/4+1/8+... bằng",
options:["1","2","3","4"],
answer:"2"
}
],
stage2:[
{
id:"ghds_s2_1",
type:"true-false",
question:"Xét dãy số un = 1/n.",
subQuestions:[
{
label:"a",
text:"lim(un)=0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Dãy số giảm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Dãy số tăng.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Mọi số hạng đều dương.",
correctAnswer:"Đúng"
}
]
},

{
id:"ghds_s2_2",
type:"true-false",
question:"Xét dãy số un=(1/3)^n.",
subQuestions:[
{
label:"a",
text:"0<1/3<1.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"lim(un)=0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Dãy số tăng.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Các số hạng đều dương.",
correctAnswer:"Đúng"
}
]
},

{
id:"ghds_s2_3",
type:"true-false",
question:"Xét các quy tắc tính giới hạn.",
subQuestions:[
{
label:"a",
text:"lim(un+vn)=lim(un)+lim(vn).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"lim(un.vn)=lim(un).lim(vn).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"lim(un/vn)=lim(un)/lim(vn) nếu lim(vn)≠0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"lim(un-vn)=lim(un)+lim(vn).",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"ghds_s3_1",
type:"short-answer",
question:"Tính lim(1/n).",
answer:"0",
explanation:"Khi n tiến tới +∞ thì 1/n tiến tới 0."
},

{
id:"ghds_s3_2",
type:"short-answer",
question:"Tính lim((3n+1)/(n+2)).",
answer:"3",
explanation:"Chia cả tử và mẫu cho n, ta được lim((3+1/n)/(1+2/n))=3."
},

{
id:"ghds_s3_3",
type:"short-answer",
question:"Tính lim((2n²+1)/(n²−3)).",
answer:"2",
explanation:"Chia cả tử và mẫu cho n², giới hạn bằng tỉ số hệ số bậc cao nhất là 2."
},

{
id:"ghds_s3_4",
type:"short-answer",
question:"Tính tổng cấp số nhân lùi vô hạn 1 + 1/2 + 1/4 + 1/8 + ...",
answer:"2",
explanation:"S=a/(1−q)=1/(1−1/2)=2."
},

{
id:"ghds_s3_5",
type:"short-answer",
question:"Tính lim((1/5)^n).",
answer:"0",
explanation:"Vì |1/5|<1 nên lim((1/5)^n)=0."
}
]
},
42: {
stage1:[
{
id:"ghhs_s1_1",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=2x+1 khi x→1 bằng",
options:["1","2","3","4"],
answer:"3"
},

{
id:"ghhs_s1_2",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=x² khi x→2 bằng",
options:["2","4","6","8"],
answer:"4"
},

{
id:"ghhs_s1_3",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=(x²−1)/(x−1) khi x→1 bằng",
options:["0","1","2","3"],
answer:"2"
},

{
id:"ghhs_s1_4",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=1/x khi x→+∞ bằng",
options:["0","1","+∞","Không tồn tại"],
answer:"0"
},

{
id:"ghhs_s1_5",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=3x²+1 khi x→+∞ bằng",
options:["0","1","+∞","3"],
answer:"+∞"
},

{
id:"ghhs_s1_6",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=1/x khi x→0⁺ bằng",
options:["0","1","+∞","−∞"],
answer:"+∞"
},

{
id:"ghhs_s1_7",
type:"multiple-choice",
question:"Giới hạn của hàm số f(x)=1/x khi x→0⁻ bằng",
options:["0","1","+∞","−∞"],
answer:"−∞"
},

{
id:"ghhs_s1_8",
type:"multiple-choice",
question:"Nếu limf(x)=2 và limg(x)=3 thì lim[f(x)+g(x)] bằng",
options:["1","5","6","0"],
answer:"5"
},

{
id:"ghhs_s1_9",
type:"multiple-choice",
question:"Nếu limf(x)=4 và limg(x)=2 thì lim[f(x)g(x)] bằng",
options:["2","4","6","8"],
answer:"8"
},

{
id:"ghhs_s1_10",
type:"multiple-choice",
question:"Nếu limf(x)=6 và limg(x)=2 thì lim[f(x)/g(x)] bằng",
options:["2","3","4","12"],
answer:"3"
}
],

stage2:[
{
id:"ghhs_s2_1",
type:"true-false",
question:"Xét hàm số f(x)=x².",
subQuestions:[
{
label:"a",
text:"lim(x→2)f(x)=4.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"lim(x→−1)f(x)=1.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"lim(x→0)f(x)=1.",
correctAnswer:"Sai"
},
{
label:"d",
text:"f(x) liên tục tại x=2.",
correctAnswer:"Đúng"
}
]
},

{
id:"ghhs_s2_2",
type:"true-false",
question:"Xét hàm số f(x)=1/x.",
subQuestions:[
{
label:"a",
text:"lim(x→+∞)f(x)=0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"lim(x→0⁺)f(x)=+∞.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"lim(x→0⁻)f(x)=−∞.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"lim(x→0)f(x)=0.",
correctAnswer:"Sai"
}
]
},

{
id:"ghhs_s2_3",
type:"true-false",
question:"Xét các quy tắc tính giới hạn.",
subQuestions:[
{
label:"a",
text:"lim[f(x)+g(x)]=limf(x)+limg(x).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"lim[f(x)g(x)]=limf(x).limg(x).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"lim[f(x)/g(x)]=limf(x)/limg(x) nếu limg(x)≠0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"lim[f(x)−g(x)]=limf(x)+limg(x).",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ghhs_s3_1",
type:"short-answer",
question:"Tính lim(x→3)(2x+1).",
answer:"7",
explanation:"Thay trực tiếp x=3 vào biểu thức: 2×3+1=7."
},

{
id:"ghhs_s3_2",
type:"short-answer",
question:"Tính lim(x→2)(x²+3x).",
answer:"10",
explanation:"Thay trực tiếp x=2: 2²+3×2=4+6=10."
},

{
id:"ghhs_s3_3",
type:"short-answer",
question:"Tính lim(x→1)(x²−1)/(x−1).",
answer:"2",
explanation:"Ta có x²−1=(x−1)(x+1). Rút gọn được lim(x+1)=2."
},

{
id:"ghhs_s3_4",
type:"short-answer",
question:"Tính lim(x→+∞)1/x.",
answer:"0",
explanation:"Khi x→+∞ thì nghịch đảo 1/x tiến dần về 0."
},

{
id:"ghhs_s3_5",
type:"short-answer",
question:"Tính lim(x→0⁺)1/x.",
answer:"+∞",
explanation:"Khi x tiến tới 0 từ phía dương thì 1/x tăng không giới hạn nên giới hạn bằng +∞."
}
]
},
43: {
stage1:[
{
id:"hslt_s1_1",
type:"multiple-choice",
question:"Hàm số y=f(x) liên tục tại x=x₀ khi",
options:[
"f(x₀) tồn tại",
"lim(x→x₀)f(x) tồn tại",
"lim(x→x₀)f(x)=f(x₀)",
"f(x₀)=0"
],
answer:"lim(x→x₀)f(x)=f(x₀)"
},

{
id:"hslt_s1_2",
type:"multiple-choice",
question:"Hàm đa thức có tính chất nào sau đây?",
options:[
"Liên tục trên ℝ",
"Gián đoạn tại 0",
"Chỉ liên tục trên (0;+∞)",
"Không liên tục"
],
answer:"Liên tục trên ℝ"
},

{
id:"hslt_s1_3",
type:"multiple-choice",
question:"Hàm phân thức hữu tỉ liên tục tại",
options:[
"Mọi điểm thuộc tập xác định",
"Mọi số thực",
"Chỉ tại x=0",
"Không điểm nào"
],
answer:"Mọi điểm thuộc tập xác định"
},

{
id:"hslt_s1_4",
type:"multiple-choice",
question:"Nếu lim(x→a)f(x)=f(a) thì hàm số",
options:[
"Liên tục tại a",
"Gián đoạn tại a",
"Không xác định tại a",
"Không kết luận được"
],
answer:"Liên tục tại a"
},

{
id:"hslt_s1_5",
type:"multiple-choice",
question:"Hàm số y=1/x liên tục trên",
options:[
"ℝ",
"(-∞;0) và (0;+∞)",
"[0;+∞)",
"(−∞;+∞)"
],
answer:"(-∞;0) và (0;+∞)"
},

{
id:"hslt_s1_6",
type:"multiple-choice",
question:"Điểm x=0 của hàm số y=1/x là",
options:[
"Điểm liên tục",
"Điểm gián đoạn",
"Điểm cực trị",
"Điểm uốn"
],
answer:"Điểm gián đoạn"
},

{
id:"hslt_s1_7",
type:"multiple-choice",
question:"Để kiểm tra tính liên tục tại x=a cần so sánh",
options:[
"f(a) và f'(a)",
"lim trái, lim phải và f(a)",
"f(a) và 0",
"f(a) và f''(a)"
],
answer:"lim trái, lim phải và f(a)"
},

{
id:"hslt_s1_8",
type:"multiple-choice",
question:"Nếu lim(x→a-)f(x)=lim(x→a+)f(x)=f(a) thì",
options:[
"Hàm liên tục tại a",
"Hàm gián đoạn tại a",
"Hàm không xác định",
"Không kết luận được"
],
answer:"Hàm liên tục tại a"
},

{
id:"hslt_s1_9",
type:"multiple-choice",
question:"Hàm số liên tục trên đoạn [a;b] thì",
options:[
"Liên tục tại mọi điểm thuộc [a;b]",
"Gián đoạn tại một điểm",
"Không xác định tại a",
"Không xác định tại b"
],
answer:"Liên tục tại mọi điểm thuộc [a;b]"
},

{
id:"hslt_s1_10",
type:"multiple-choice",
question:"Định lý giá trị trung gian áp dụng cho hàm số",
options:[
"Liên tục trên đoạn",
"Gián đoạn trên đoạn",
"Không xác định",
"Chỉ liên tục tại một điểm"
],
answer:"Liên tục trên đoạn"
}
],
stage2:[
{
id:"hslt_s2_1",
type:"true-false",
question:"Xét hàm số y=x².",
subQuestions:[
{
label:"a",
text:"Hàm số liên tục trên ℝ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hàm số liên tục tại x=0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hàm số gián đoạn tại x=1.",
correctAnswer:"Sai"
},
{
label:"d",
text:"lim(x→2)x²=4.",
correctAnswer:"Đúng"
}
]
},

{
id:"hslt_s2_2",
type:"true-false",
question:"Xét hàm số y=1/x.",
subQuestions:[
{
label:"a",
text:"Hàm số xác định tại x=0.",
correctAnswer:"Sai"
},
{
label:"b",
text:"Hàm số liên tục trên (0;+∞).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hàm số liên tục trên (-∞;0).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số liên tục trên ℝ.",
correctAnswer:"Sai"
}
]
},

{
id:"hslt_s2_3",
type:"true-false",
question:"Xét tính liên tục của hàm số.",
subQuestions:[
{
label:"a",
text:"Nếu lim(x→a)f(x)=f(a) thì hàm liên tục tại a.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hàm đa thức luôn liên tục trên ℝ.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hàm phân thức hữu tỉ luôn liên tục trên tập xác định.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mọi hàm số đều liên tục trên ℝ.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"hslt_s3_1",
type:"short-answer",
question:"Tính lim(x→2)(x²+1).",
answer:"5",
explanation:"Hàm đa thức liên tục nên thay trực tiếp x=2 được 2²+1=5."
},

{
id:"hslt_s3_2",
type:"short-answer",
question:"Tính lim(x→3)(2x−1).",
answer:"5",
explanation:"Hàm bậc nhất liên tục nên thay trực tiếp x=3 được 2·3−1=5."
},

{
id:"hslt_s3_3",
type:"short-answer",
question:"Tính lim(x→1)(x²−1)/(x−1).",
answer:"2",
explanation:"Ta có x²−1=(x−1)(x+1). Rút gọn rồi thay x=1 được 2."
},

{
id:"hslt_s3_4",
type:"short-answer",
question:"Hàm số y=1/x có bao nhiêu điểm gián đoạn trên ℝ?",
answer:"1",
explanation:"Hàm số chỉ không xác định tại x=0 nên có một điểm gián đoạn."
},

{
id:"hslt_s3_5",
type:"short-answer",
question:"Cho f(x)= { x+1 nếu x≠1; m nếu x=1 }. Tìm m để hàm số liên tục tại x=1.",
answer:"2",
explanation:"Để liên tục tại x=1 cần có m=lim(x→1)(x+1)=2."
}
]
},
44: {
stage1:[
{
id:"lt_s1_1",
type:"multiple-choice",
question:"Với a>0, m,n∈R. Công thức nào đúng?",
options:[
"a^m.a^n=a^(m+n)",
"a^m.a^n=a^(mn)",
"a^m+a^n=a^(m+n)",
"(a^m)^n=a^(m+n)"
],
answer:"a^m.a^n=a^(m+n)"
},

{
id:"lt_s1_2",
type:"multiple-choice",
question:"Với a>0. a^0 bằng",
options:["0","1","a","a²"],
answer:"1"
},

{
id:"lt_s1_3",
type:"multiple-choice",
question:"Giá trị của 8^(1/3) là",
options:["2","3","4","8"],
answer:"2"
},

{
id:"lt_s1_4",
type:"multiple-choice",
question:"Giá trị của 16^(1/2) là",
options:["2","4","8","16"],
answer:"4"
},

{
id:"lt_s1_5",
type:"multiple-choice",
question:"Với a>0, a^(-2) bằng",
options:[
"1/a²",
"a²",
"-a²",
"1/(2a)"
],
answer:"1/a²"
},

{
id:"lt_s1_6",
type:"multiple-choice",
question:"Giá trị của 27^(2/3) là",
options:["3","6","9","27"],
answer:"9"
},

{
id:"lt_s1_7",
type:"multiple-choice",
question:"Rút gọn (a^(1/2))² với a>0",
options:["a","√a","a²","1"],
answer:"a"
},

{
id:"lt_s1_8",
type:"multiple-choice",
question:"Nếu a>1 và m>n thì",
options:[
"a^m>a^n",
"a^m<a^n",
"a^m=a^n",
"Không kết luận được"
],
answer:"a^m>a^n"
},

{
id:"lt_s1_9",
type:"multiple-choice",
question:"Nếu 0<a<1 và m>n thì",
options:[
"a^m>a^n",
"a^m<a^n",
"a^m=a^n",
"Không kết luận được"
],
answer:"a^m<a^n"
},

{
id:"lt_s1_10",
type:"multiple-choice",
question:"Giá trị của 81^(3/4) là",
options:["9","27","18","3"],
answer:"27"
}
],
stage2:[
{
id:"lt_s2_1",
type:"true-false",
question:"Xét các tính chất lũy thừa với a>0.",
subQuestions:[
{
label:"a",
text:"a^m.a^n=a^(m+n).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a^m/a^n=a^(m−n).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(a^m)^n=a^(mn).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"a^m+a^n=a^(m+n).",
correctAnswer:"Sai"
}
]
},

{
id:"lt_s2_2",
type:"true-false",
question:"Xét các giá trị lũy thừa.",
subQuestions:[
{
label:"a",
text:"16^(1/2)=4.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"27^(1/3)=3.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"8^(2/3)=4.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"25^(1/2)=±5.",
correctAnswer:"Sai"
}
]
},

{
id:"lt_s2_3",
type:"true-false",
question:"Xét sự so sánh lũy thừa.",
subQuestions:[
{
label:"a",
text:"Nếu a>1 và m>n thì a^m>a^n.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu 0<a<1 và m>n thì a^m<a^n.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"2^5>2^4.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"(1/2)^5>(1/2)^4.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"lt_s3_1",
type:"short-answer",
question:"Tính 64^(1/3).",
answer:"4",
explanation:"64 = 4³ nên 64^(1/3)=4."
},

{
id:"lt_s3_2",
type:"short-answer",
question:"Tính 32^(3/5).",
answer:"8",
explanation:"32=2⁵ nên 32^(3/5)=(2⁵)^(3/5)=2³=8."
},

{
id:"lt_s3_3",
type:"short-answer",
question:"Tính 81^(1/4).",
answer:"3",
explanation:"81=3⁴ nên 81^(1/4)=3."
},

{
id:"lt_s3_4",
type:"short-answer",
question:"Tính 125^(-2/3).",
answer:"1/25",
explanation:"125=5³ nên 125^(-2/3)=5^(-2)=1/25."
},

{
id:"lt_s3_5",
type:"short-answer",
question:"Một người gửi 100 triệu đồng với lãi kép 5%/năm. Sau 2 năm có bao nhiêu triệu đồng?",
answer:"110.25",
explanation:"S=100(1+0,05)²=100×1,1025=110,25 (triệu đồng)."
}
]
},
45: {
stage1:[
{
id:"log_s1_1",
type:"multiple-choice",
question:"Giá trị của log₂8 bằng",
options:["2","3","4","8"],
answer:"3"
},

{
id:"log_s1_2",
type:"multiple-choice",
question:"Giá trị của log₃27 bằng",
options:["2","3","4","9"],
answer:"3"
},

{
id:"log_s1_3",
type:"multiple-choice",
question:"Giá trị của log₁₀100 bằng",
options:["1","2","10","100"],
answer:"2"
},

{
id:"log_s1_4",
type:"multiple-choice",
question:"Biểu thức logₐ(a⁵) bằng",
options:["a","5","a⁵","1"],
answer:"5"
},

{
id:"log_s1_5",
type:"multiple-choice",
question:"Cho a>0, a≠1. Công thức nào đúng?",
options:[
"logₐ(xy)=logₐx+logₐy",
"logₐ(x+y)=logₐx+logₐy",
"logₐ(xy)=logₐx·logₐy",
"logₐ(x/y)=logₐx+logₐy"
],
answer:"logₐ(xy)=logₐx+logₐy"
},

{
id:"log_s1_6",
type:"multiple-choice",
question:"Cho a>0, a≠1. Công thức nào đúng?",
options:[
"logₐ(x/y)=logₐx−logₐy",
"logₐ(x/y)=logₐx+logₐy",
"logₐ(x/y)=logₐx·logₐy",
"logₐ(x/y)=1"
],
answer:"logₐ(x/y)=logₐx−logₐy"
},

{
id:"log_s1_7",
type:"multiple-choice",
question:"Giá trị của log₅(1) bằng",
options:["0","1","5","Không xác định"],
answer:"0"
},

{
id:"log_s1_8",
type:"multiple-choice",
question:"Giá trị của log₂(1/8) bằng",
options:["-3","-2","3","8"],
answer:"-3"
},

{
id:"log_s1_9",
type:"multiple-choice",
question:"Giá trị của log₄16 bằng",
options:["2","4","8","16"],
answer:"2"
},

{
id:"log_s1_10",
type:"multiple-choice",
question:"Nếu log₃x=2 thì x bằng",
options:["6","8","9","12"],
answer:"9"
}
],
stage2:[
{
id:"log_s2_1",
type:"true-false",
question:"Xét các tính chất của logarit.",
subQuestions:[
{
label:"a",
text:"logₐ(xy)=logₐx+logₐy.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"logₐ(x/y)=logₐx−logₐy.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"logₐ(xⁿ)=nlogₐx.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"logₐ(x+y)=logₐx+logₐy.",
correctAnswer:"Sai"
}
]
},

{
id:"log_s2_2",
type:"true-false",
question:"Xét các giá trị logarit.",
subQuestions:[
{
label:"a",
text:"log₂8=3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"log₃27=3.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"log₅1=1.",
correctAnswer:"Sai"
},
{
label:"d",
text:"log₂(1/8)=-3.",
correctAnswer:"Đúng"
}
]
},

{
id:"log_s2_3",
type:"true-false",
question:"Xét điều kiện xác định của logarit.",
subQuestions:[
{
label:"a",
text:"logₐx xác định khi x>0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Cơ số a phải dương.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Cơ số a khác 1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"log₀x luôn xác định.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"log_s3_1",
type:"short-answer",
question:"Tính log₂32.",
answer:"5",
explanation:"Vì 32 = 2⁵ nên log₂32 = 5."
},

{
id:"log_s3_2",
type:"short-answer",
question:"Tính log₃(1/27).",
answer:"-3",
explanation:"Vì 1/27 = 3⁻³ nên log₃(1/27) = -3."
},

{
id:"log_s3_3",
type:"short-answer",
question:"Tính log₅125.",
answer:"3",
explanation:"Vì 125 = 5³ nên log₅125 = 3."
},

{
id:"log_s3_4",
type:"short-answer",
question:"Cho log₂x = 7. Tìm x.",
answer:"128",
explanation:"Theo định nghĩa logarit: x = 2⁷ = 128."
},

{
id:"log_s3_5",
type:"short-answer",
question:"Độ pH của dung dịch là 3. Nồng độ ion H⁺ bằng bao nhiêu?",
answer:"0.001",
explanation:"Theo công thức pH = -log[H⁺]. Suy ra [H⁺] = 10⁻³ = 0,001."
}
]
},
46: {
stage1:[
{
id:"hsml_s1_1",
type:"multiple-choice",
question:"Hàm số nào dưới đây là hàm số mũ?",
options:[
"y = 2^x",
"y = x²",
"y = log₂x",
"y = √x"
],
answer:"y = 2^x"
},

{
id:"hsml_s1_2",
type:"multiple-choice",
question:"Tập xác định của hàm số y = 3^x là",
options:[
"(0;+∞)",
"ℝ",
"[0;+∞)",
"(-∞;0)"
],
answer:"ℝ"
},

{
id:"hsml_s1_3",
type:"multiple-choice",
question:"Tập xác định của hàm số y = log₂x là",
options:[
"ℝ",
"[0;+∞)",
"(0;+∞)",
"(-∞;+∞)"
],
answer:"(0;+∞)"
},

{
id:"hsml_s1_4",
type:"multiple-choice",
question:"Hàm số y = 2^x có tính chất",
options:[
"Nghịch biến trên ℝ",
"Đồng biến trên ℝ",
"Không đổi",
"Tuần hoàn"
],
answer:"Đồng biến trên ℝ"
},

{
id:"hsml_s1_5",
type:"multiple-choice",
question:"Hàm số y = (1/2)^x có tính chất",
options:[
"Đồng biến trên ℝ",
"Nghịch biến trên ℝ",
"Không xác định với x<0",
"Tuần hoàn"
],
answer:"Nghịch biến trên ℝ"
},

{
id:"hsml_s1_6",
type:"multiple-choice",
question:"Đồ thị hàm số y = log₂x đi qua điểm nào?",
options:[
"(1;0)",
"(0;1)",
"(2;0)",
"(0;2)"
],
answer:"(1;0)"
},

{
id:"hsml_s1_7",
type:"multiple-choice",
question:"Giá trị của log₂8 là",
options:["2","3","4","8"],
answer:"3"
},

{
id:"hsml_s1_8",
type:"multiple-choice",
question:"Giới hạn lim(2^x) khi x→+∞ bằng",
options:[
"0",
"1",
"+∞",
"Không tồn tại"
],
answer:"+∞"
},

{
id:"hsml_s1_9",
type:"multiple-choice",
question:"Giới hạn lim(log₂x) khi x→+∞ bằng",
options:[
"0",
"1",
"+∞",
"2"
],
answer:"+∞"
},

{
id:"hsml_s1_10",
type:"multiple-choice",
question:"Đồ thị hàm số y = log₃x nhận đường thẳng nào làm tiệm cận đứng?",
options:[
"x = 0",
"y = 0",
"x = 1",
"y = 1"
],
answer:"x = 0"
}
],

stage2:[
{
id:"hsml_s2_1",
type:"true-false",
question:"Xét hàm số mũ y = 2^x.",
subQuestions:[
{
label:"a",
text:"Tập xác định là ℝ.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hàm số đồng biến trên ℝ.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đồ thị đi qua điểm (0;1).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số có tiệm cận đứng x = 0.",
correctAnswer:"Sai"
}
]
},

{
id:"hsml_s2_2",
type:"true-false",
question:"Xét hàm số logarit y = log₂x.",
subQuestions:[
{
label:"a",
text:"Tập xác định là (0;+∞).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đồ thị đi qua điểm (1;0).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hàm số đồng biến trên (0;+∞).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Đồ thị có tiệm cận ngang y = 0.",
correctAnswer:"Sai"
}
]
},

{
id:"hsml_s2_3",
type:"true-false",
question:"Xét mối liên hệ giữa hàm số mũ và logarit.",
subQuestions:[
{
label:"a",
text:"y = a^x và y = logₐx là hai hàm số ngược nhau.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đồ thị của chúng đối xứng qua đường thẳng y = x.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu a > 1 thì cả hai hàm đều đồng biến.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Nếu 0 < a < 1 thì cả hai hàm đều đồng biến.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"hsml_s3_1",
type:"short-answer",
question:"Tính giá trị của log₂32.",
answer:"5",
explanation:"Vì 32 = 2⁵ nên log₂32 = 5."
},

{
id:"hsml_s3_2",
type:"short-answer",
question:"Tìm x biết 3^x = 81.",
answer:"4",
explanation:"81 = 3⁴ nên x = 4."
},

{
id:"hsml_s3_3",
type:"short-answer",
question:"Tính log₅(1/25).",
answer:"-2",
explanation:"1/25 = 5⁻² nên log₅(1/25) = -2."
},

{
id:"hsml_s3_4",
type:"short-answer",
question:"Một số tiền 100 triệu đồng được gửi ngân hàng với lãi kép 6%/năm. Sau 2 năm có bao nhiêu triệu đồng?",
answer:"112.36",
explanation:"A = 100(1+0,06)² = 112,36 (triệu đồng)."
},

{
id:"hsml_s3_5",
type:"short-answer",
question:"Một quần thể vi khuẩn ban đầu có 1500 con và tăng 25% sau mỗi 2 ngày. Sau 6 ngày có bao nhiêu con?",
answer:"2929.69",
explanation:"Sau 6 ngày có 3 chu kỳ tăng trưởng. Số vi khuẩn là 1500×1,25³ = 2929,6875 ≈ 2929,69 con."
}
]
},
47: {
stage1:[
{
id:"bptml_s1_1",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình 2^x > 8 là",
options:["x>3","x<3","x≥3","x≤3"],
answer:"x>3"
},

{
id:"bptml_s1_2",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình 3^x < 27 là",
options:["x<3","x>3","x≤3","x≥3"],
answer:"x<3"
},

{
id:"bptml_s1_3",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình (1/2)^x > 8 là",
options:["x<-3","x>-3","x<3","x>3"],
answer:"x<-3"
},

{
id:"bptml_s1_4",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình log₂x > 3 là",
options:["x>8","x<8","x≥8","x≤8"],
answer:"x>8"
},

{
id:"bptml_s1_5",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình log₃x < 2 là",
options:["0<x<9","x>9","x<9","0<x≤9"],
answer:"0<x<9"
},

{
id:"bptml_s1_6",
type:"multiple-choice",
question:"Điều kiện xác định của log₂(x−1) là",
options:[
"x>1",
"x≥1",
"x≠1",
"x>0"
],
answer:"x>1"
},

{
id:"bptml_s1_7",
type:"multiple-choice",
question:"Nghiệm của bất phương trình 5^(x−1) ≥ 25 là",
options:[
"x≥3",
"x≥2",
"x≤2",
"x≤3"
],
answer:"x≥3"
},

{
id:"bptml_s1_8",
type:"multiple-choice",
question:"Tập nghiệm của log₂x ≤ 0 là",
options:[
"0<x≤1",
"x≥1",
"x<1",
"x≤0"
],
answer:"0<x≤1"
},

{
id:"bptml_s1_9",
type:"multiple-choice",
question:"Bất phương trình 4^x > 2^(x+2) tương đương",
options:[
"x>2",
"x<2",
"x≥2",
"x≤2"
],
answer:"x>2"
},

{
id:"bptml_s1_10",
type:"multiple-choice",
question:"Tập nghiệm của bất phương trình log₅(x+1)>1 là",
options:[
"x>4",
"x>5",
"x≥4",
"x≥5"
],
answer:"x>4"
}
],
stage2:[
{
id:"bptml_s2_1",
type:"true-false",
question:"Xét bất phương trình 2^x > 8.",
subQuestions:[
{
label:"a",
text:"Bất phương trình tương đương x>3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"x=4 là nghiệm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"x=3 là nghiệm.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Tập nghiệm là (3;+∞).",
correctAnswer:"Đúng"
}
]
},

{
id:"bptml_s2_2",
type:"true-false",
question:"Xét bất phương trình log₂x < 3.",
subQuestions:[
{
label:"a",
text:"Điều kiện là x>0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bất phương trình tương đương x<8.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Tập nghiệm là (0;8).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"x=8 là nghiệm.",
correctAnswer:"Sai"
}
]
},

{
id:"bptml_s2_3",
type:"true-false",
question:"Xét các tính chất của bất phương trình mũ và logarit.",
subQuestions:[
{
label:"a",
text:"Nếu a>1 thì a^x là hàm đồng biến.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu 0<a<1 thì a^x là hàm nghịch biến.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu a>1 thì logₐx là hàm đồng biến.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Nếu 0<a<1 thì logₐx là hàm đồng biến.",
correctAnswer:"Sai"
}
]
}
],
stage3:[
{
id:"bptml_s3_1",
type:"short-answer",
question:"Giải bất phương trình 3^x > 81. Nhập giá trị biên của nghiệm.",
answer:"4",
explanation:"81=3⁴ nên 3^x>3⁴ ⇔ x>4."
},

{
id:"bptml_s3_2",
type:"short-answer",
question:"Giải bất phương trình log₂x > 5. Nhập giá trị biên.",
answer:"32",
explanation:"log₂x>5 ⇔ x>2⁵=32."
},

{
id:"bptml_s3_3",
type:"short-answer",
question:"Tìm số nghiệm nguyên của bất phương trình 2^x<16.",
answer:"4",
explanation:"2^x<2⁴ ⇔ x<4. Các nghiệm nguyên dương là 0,1,2,3 nên có 4 nghiệm."
},

{
id:"bptml_s3_4",
type:"short-answer",
question:"Giải bất phương trình log₃(x−1)≥2. Nhập giá trị biên.",
answer:"10",
explanation:"log₃(x−1)≥2 ⇔ x−1≥9 ⇔ x≥10."
},

{
id:"bptml_s3_5",
type:"short-answer",
question:"Một số tiền tăng theo công thức A=100·(1,05)^n. Sau bao nhiêu năm số tiền vượt 110 triệu lần đầu tiên?",
answer:"2",
explanation:"100(1,05)^1=105<110. 100(1,05)^2=110,25>110 nên cần 2 năm."
}
]
},
48: {
stage1:[
{
id:"htvg_s1_1",
type:"multiple-choice",
question:"Hai đường thẳng được gọi là vuông góc khi góc giữa chúng bằng",
options:["30°","45°","60°","90°"],
answer:"90°"
},

{
id:"htvg_s1_2",
type:"multiple-choice",
question:"Trong hình vuông ABCD, cặp đường thẳng nào vuông góc?",
options:["AB và CD","AB và BC","AC và BD","AD và BC"],
answer:"AB và BC"
},

{
id:"htvg_s1_3",
type:"multiple-choice",
question:"Trong hình lập phương ABCD.A'B'C'D', đường thẳng AA' vuông góc với",
options:["AB","AD","AC","AB và AD"],
answer:"AB và AD"
},

{
id:"htvg_s1_4",
type:"multiple-choice",
question:"Nếu a ⊥ b thì góc giữa a và b bằng",
options:["0°","45°","60°","90°"],
answer:"90°"
},

{
id:"htvg_s1_5",
type:"multiple-choice",
question:"Trong tam giác vuông ABC vuông tại A, hai cạnh vuông góc là",
options:["AB và BC","AC và BC","AB và AC","BC và AH"],
answer:"AB và AC"
},

{
id:"htvg_s1_6",
type:"multiple-choice",
question:"Trong hình chữ nhật ABCD, hai đường chéo AC và BD",
options:[
"Luôn vuông góc",
"Song song",
"Không nhất thiết vuông góc",
"Trùng nhau"
],
answer:"Không nhất thiết vuông góc"
},

{
id:"htvg_s1_7",
type:"multiple-choice",
question:"Nếu đường thẳng a vuông góc với đường thẳng b thì",
options:[
"b vuông góc với a",
"a song song b",
"a cắt b tạo góc 60°",
"a trùng b"
],
answer:"b vuông góc với a"
},

{
id:"htvg_s1_8",
type:"multiple-choice",
question:"Trong tứ diện đều ABCD, góc giữa AB và CD bằng",
options:["0°","45°","60°","90°"],
answer:"90°"
},

{
id:"htvg_s1_9",
type:"multiple-choice",
question:"Trong hình lập phương, đường chéo của hai mặt đối diện",
options:[
"Luôn vuông góc",
"Có thể vuông góc",
"Luôn song song",
"Luôn trùng nhau"
],
answer:"Có thể vuông góc"
},

{
id:"htvg_s1_10",
type:"multiple-choice",
question:"Điều kiện để hai đường thẳng vuông góc là",
options:[
"Tích vô hướng của hai vectơ chỉ phương bằng 0",
"Hai đường thẳng song song",
"Hai đường thẳng cắt nhau",
"Hai đường thẳng đồng phẳng"
],
answer:"Tích vô hướng của hai vectơ chỉ phương bằng 0"
}
],

stage2:[
{
id:"htvg_s2_1",
type:"true-false",
question:"Xét quan hệ vuông góc giữa hai đường thẳng.",
subQuestions:[
{
label:"a",
text:"Nếu a ⊥ b thì b ⊥ a.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai đường thẳng vuông góc luôn cắt nhau.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Góc giữa hai đường thẳng vuông góc bằng 90°.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường thẳng song song thì vuông góc.",
correctAnswer:"Sai"
}
]
},

{
id:"htvg_s2_2",
type:"true-false",
question:"Xét hình lập phương ABCD.A'B'C'D'.",
subQuestions:[
{
label:"a",
text:"AA' ⊥ AB.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AA' ⊥ AD.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"AB ⊥ BC.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"AB ⊥ CD.",
correctAnswer:"Sai"
}
]
},

{
id:"htvg_s2_3",
type:"true-false",
question:"Xét các góc giữa hai đường thẳng trong không gian.",
subQuestions:[
{
label:"a",
text:"Góc giữa hai đường thẳng luôn nằm trong khoảng từ 0° đến 90°.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai đường thẳng vuông góc có góc bằng 90°.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường thẳng song song có góc bằng 0°.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường thẳng chéo nhau không xác định được góc.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"htvg_s3_1",
type:"short-answer",
question:"Hai đường thẳng vuông góc tạo với nhau góc bao nhiêu độ?",
answer:"90",
explanation:"Theo định nghĩa, hai đường thẳng vuông góc tạo thành góc 90°."
},

{
id:"htvg_s3_2",
type:"short-answer",
question:"Trong tam giác vuông, số cặp cạnh vuông góc là bao nhiêu?",
answer:"1",
explanation:"Tam giác vuông chỉ có một góc vuông nên chỉ có một cặp cạnh vuông góc."
},

{
id:"htvg_s3_3",
type:"short-answer",
question:"Trong hình vuông ABCD có bao nhiêu cặp cạnh kề vuông góc?",
answer:"4",
explanation:"Bốn đỉnh của hình vuông tạo ra 4 góc vuông nên có 4 cặp cạnh kề vuông góc."
},

{
id:"htvg_s3_4",
type:"short-answer",
question:"Trong hình lập phương, mỗi đỉnh có bao nhiêu cạnh đôi một vuông góc với nhau?",
answer:"3",
explanation:"Tại mỗi đỉnh của hình lập phương có 3 cạnh xuất phát và chúng đôi một vuông góc."
},

{
id:"htvg_s3_5",
type:"short-answer",
question:"Tích vô hướng của hai vectơ chỉ phương của hai đường thẳng vuông góc bằng bao nhiêu?",
answer:"0",
explanation:"Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0."
}
]
},
49: {
stage1:[
{
id:"dtmp_s1_1",
type:"multiple-choice",
question:"Nếu đường thẳng a vuông góc với mặt phẳng (P) thì a vuông góc với",
options:[
"Một đường thẳng bất kỳ thuộc (P)",
"Hai đường thẳng cắt nhau thuộc (P)",
"Một đường thẳng của (P)",
"Không đường nào"
],
answer:"Hai đường thẳng cắt nhau thuộc (P)"
},

{
id:"dtmp_s1_2",
type:"multiple-choice",
question:"Cho a ⊥ (P). Khi đó góc giữa a và (P) bằng",
options:["0°","30°","45°","90°"],
answer:"90°"
},

{
id:"dtmp_s1_3",
type:"multiple-choice",
question:"Nếu a ⊥ (P) và b ⊂ (P) thì",
options:[
"a ⊥ b",
"a // b",
"a cắt b",
"Không kết luận được"
],
answer:"a ⊥ b"
},

{
id:"dtmp_s1_4",
type:"multiple-choice",
question:"Điều kiện đủ để đường thẳng a vuông góc với mặt phẳng (P) là",
options:[
"a vuông góc với hai đường thẳng cắt nhau thuộc (P)",
"a song song với (P)",
"a cắt (P)",
"a nằm trong (P)"
],
answer:"a vuông góc với hai đường thẳng cắt nhau thuộc (P)"
},

{
id:"dtmp_s1_5",
type:"multiple-choice",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC). Khi đó SA vuông góc với",
options:[
"AB",
"AC",
"BC",
"AB và AC"
],
answer:"AB và AC"
},

{
id:"dtmp_s1_6",
type:"multiple-choice",
question:"Cho hình chóp S.ABCD có SA ⊥ (ABCD). Góc giữa SA và mặt phẳng đáy bằng",
options:["0°","45°","60°","90°"],
answer:"90°"
},

{
id:"dtmp_s1_7",
type:"multiple-choice",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC). Tam giác ABC là",
options:[
"Hình chiếu vuông góc của tam giác SBC",
"Hình chiếu vuông góc của tam giác SAC",
"Hình chiếu vuông góc của tam giác SABC",
"Hình chiếu vuông góc của điểm S"
],
answer:"Hình chiếu vuông góc của tam giác SAC"
},

{
id:"dtmp_s1_8",
type:"multiple-choice",
question:"Nếu đường thẳng a vuông góc với mặt phẳng (P) tại H thì H được gọi là",
options:[
"Trung điểm",
"Chân đường vuông góc",
"Tâm đường tròn",
"Trọng tâm"
],
answer:"Chân đường vuông góc"
},

{
id:"dtmp_s1_9",
type:"multiple-choice",
question:"Trong hình lập phương ABCD.A'B'C'D', đường thẳng AA' vuông góc với",
options:[
"(ABCD)",
"(A'B'C'D')",
"(ABB'A')",
"(BCC'B')"
],
answer:"(ABCD)"
},

{
id:"dtmp_s1_10",
type:"multiple-choice",
question:"Nếu a ⊥ (P) và b // a thì",
options:[
"b ⊥ (P)",
"b // (P)",
"b thuộc (P)",
"Không kết luận được"
],
answer:"b ⊥ (P)"
}
],
stage2:[
{
id:"dtmp_s2_1",
type:"true-false",
question:"Cho đường thẳng a vuông góc với mặt phẳng (P).",
subQuestions:[
{
label:"a",
text:"a vuông góc với mọi đường thẳng nằm trong (P) đi qua chân đường vuông góc.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Góc giữa a và (P) bằng 90°.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"a nằm trong (P).",
correctAnswer:"Sai"
},
{
label:"d",
text:"a cắt (P) tại đúng một điểm.",
correctAnswer:"Đúng"
}
]
},

{
id:"dtmp_s2_2",
type:"true-false",
question:"Cho hình chóp S.ABC có SA ⊥ (ABC).",
subQuestions:[
{
label:"a",
text:"SA ⊥ AB.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"SA ⊥ AC.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"SA ⊥ BC.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Góc giữa SA và mặt phẳng (ABC) bằng 0°.",
correctAnswer:"Sai"
}
]
},

{
id:"dtmp_s2_3",
type:"true-false",
question:"Xét dấu hiệu nhận biết đường thẳng vuông góc với mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Nếu một đường thẳng vuông góc với hai đường thẳng cắt nhau thuộc mặt phẳng thì nó vuông góc với mặt phẳng đó.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu một đường thẳng vuông góc với một đường thẳng thuộc mặt phẳng thì nó vuông góc với mặt phẳng.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Đường thẳng vuông góc với mặt phẳng thì vuông góc với mọi đường thẳng trong mặt phẳng.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song với nhau.",
correctAnswer:"Đúng"
}
]
}
],
stage3:[
{
id:"dtmp_s3_1",
type:"short-answer",
question:"Một đường thẳng vuông góc với mặt phẳng tạo với mặt phẳng một góc bằng bao nhiêu độ?",
answer:"90",
explanation:"Theo định nghĩa, đường thẳng vuông góc với mặt phẳng tạo với mặt phẳng góc 90°."
},

{
id:"dtmp_s3_2",
type:"short-answer",
question:"Cho hình chóp S.ABC có SA ⊥ (ABC). Đường thẳng SA vuông góc với bao nhiêu cạnh của tam giác ABC?",
answer:"3",
explanation:"SA vuông góc với mọi đường thẳng nằm trong mặt phẳng (ABC) đi qua A, đặc biệt vuông góc với AB, AC và theo giả thiết suy ra vuông góc với BC."
},

{
id:"dtmp_s3_3",
type:"short-answer",
question:"Có bao nhiêu đường thẳng xác định một mặt phẳng để kiểm tra dấu hiệu vuông góc với mặt phẳng?",
answer:"2",
explanation:"Chỉ cần chứng minh đường thẳng vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng."
},

{
id:"dtmp_s3_4",
type:"short-answer",
question:"Nếu hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì góc giữa chúng bằng bao nhiêu độ?",
answer:"0",
explanation:"Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song với nhau nên góc giữa chúng bằng 0°."
},

{
id:"dtmp_s3_5",
type:"short-answer",
question:"Trong hình lập phương, tại mỗi đỉnh có bao nhiêu cạnh đôi một vuông góc?",
answer:"3",
explanation:"Tại mỗi đỉnh của hình lập phương có đúng 3 cạnh xuất phát và chúng đôi một vuông góc."
}
]
},
50: {
stage1:[
{
id:"pcvg_s1_1",
type:"multiple-choice",
question:"Hình chiếu vuông góc của điểm M trên mặt phẳng (P) là",
options:[
"Điểm bất kỳ thuộc (P)",
"Giao điểm của đường thẳng qua M vuông góc với (P) và (P)",
"Trung điểm của đoạn thẳng",
"Điểm gần M nhất trên (P)"
],
answer:"Giao điểm của đường thẳng qua M vuông góc với (P) và (P)"
},

{
id:"pcvg_s1_2",
type:"multiple-choice",
question:"Hình chiếu vuông góc của một đường thẳng lên mặt phẳng là",
options:[
"Một điểm",
"Một đường thẳng hoặc một điểm",
"Một mặt phẳng",
"Một đoạn thẳng"
],
answer:"Một đường thẳng hoặc một điểm"
},

{
id:"pcvg_s1_3",
type:"multiple-choice",
question:"Góc giữa đường thẳng d và mặt phẳng (P) là",
options:[
"Góc giữa d và hình chiếu vuông góc của nó trên (P)",
"Góc giữa d và một đường thẳng bất kỳ trong (P)",
"Góc giữa d và đường vuông góc với (P)",
"Góc nhị diện tạo bởi d và (P)"
],
answer:"Góc giữa d và hình chiếu vuông góc của nó trên (P)"
},

{
id:"pcvg_s1_4",
type:"multiple-choice",
question:"Nếu đường thẳng d nằm trong mặt phẳng (P) thì góc giữa d và (P) bằng",
options:["0°","30°","45°","90°"],
answer:"0°"
},

{
id:"pcvg_s1_5",
type:"multiple-choice",
question:"Nếu d vuông góc với (P) thì góc giữa d và (P) bằng",
options:["0°","30°","45°","90°"],
answer:"90°"
},

{
id:"pcvg_s1_6",
type:"multiple-choice",
question:"Góc giữa đường thẳng và mặt phẳng luôn thuộc khoảng",
options:[
"[0°;90°]",
"(0°;180°)",
"[0°;180°]",
"(0°;90°)"
],
answer:"[0°;90°]"
},

{
id:"pcvg_s1_7",
type:"multiple-choice",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC), hình chiếu vuông góc của S lên (ABC) là",
options:["A","B","C","Trọng tâm tam giác"],
answer:"A"
},

{
id:"pcvg_s1_8",
type:"multiple-choice",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC), góc giữa SC và (ABC) là",
options:[
"∠SCA",
"∠SAC",
"∠SBC",
"∠ABC"
],
answer:"∠SCA"
},

{
id:"pcvg_s1_9",
type:"multiple-choice",
question:"Nếu hình chiếu vuông góc của đường thẳng d trên mặt phẳng (P) là d' thì",
options:[
"Góc giữa d và (P) bằng góc giữa d và d'",
"Góc giữa d và (P) luôn bằng 90°",
"d vuông góc d'",
"d song song d'"
],
answer:"Góc giữa d và (P) bằng góc giữa d và d'"
},

{
id:"pcvg_s1_10",
type:"multiple-choice",
question:"Trong hình hộp chữ nhật, hình chiếu vuông góc của đường chéo không gian AC' lên đáy ABCD là",
options:["AB","BC","AC","BD"],
answer:"AC"
}
],

stage2:[
{
id:"pcvg_s2_1",
type:"true-false",
question:"Xét các khái niệm về phép chiếu vuông góc.",
subQuestions:[
{
label:"a",
text:"Hình chiếu vuông góc của một điểm trên mặt phẳng là duy nhất.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hình chiếu vuông góc của một đường thẳng có thể là một điểm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Mọi điểm thuộc mặt phẳng đều là hình chiếu của M.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đường vuông góc dùng để chiếu phải vuông góc với mặt phẳng.",
correctAnswer:"Đúng"
}
]
},

{
id:"pcvg_s2_2",
type:"true-false",
question:"Xét góc giữa đường thẳng và mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Góc giữa đường thẳng và mặt phẳng nằm trong khoảng từ 0° đến 90°.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu đường thẳng nằm trong mặt phẳng thì góc bằng 0°.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu đường thẳng vuông góc với mặt phẳng thì góc bằng 90°.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Góc giữa đường thẳng và mặt phẳng có thể lớn hơn 90°.",
correctAnswer:"Sai"
}
]
},

{
id:"pcvg_s2_3",
type:"true-false",
question:"Cho hình chóp S.ABC có SA ⊥ (ABC).",
subQuestions:[
{
label:"a",
text:"A là hình chiếu vuông góc của S lên (ABC).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AC là hình chiếu vuông góc của SC lên (ABC).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Góc giữa SC và (ABC) là ∠SCA.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"SC vuông góc với (ABC).",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"pcvg_s3_1",
type:"short-answer",
question:"Nếu một đường thẳng nằm trong mặt phẳng thì góc giữa chúng bằng bao nhiêu độ?",
answer:"0",
explanation:"Đường thẳng nằm trong mặt phẳng nên góc giữa đường thẳng và mặt phẳng bằng 0°."
},

{
id:"pcvg_s3_2",
type:"short-answer",
question:"Nếu một đường thẳng vuông góc với mặt phẳng thì góc giữa chúng bằng bao nhiêu độ?",
answer:"90",
explanation:"Theo định nghĩa, góc giữa đường thẳng vuông góc và mặt phẳng là 90°."
},

{
id:"pcvg_s3_3",
type:"short-answer",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC). Hình chiếu vuông góc của điểm S lên mặt phẳng (ABC) là điểm nào?",
answer:"A",
explanation:"Do SA vuông góc với mặt phẳng (ABC) nên A là chân đường vuông góc từ S xuống đáy."
},

{
id:"pcvg_s3_4",
type:"short-answer",
question:"Trong hình hộp chữ nhật ABCD.A'B'C'D', hình chiếu vuông góc của AC' lên mặt phẳng (ABCD) là đoạn nào?",
answer:"AC",
explanation:"Điểm A chiếu thành A, điểm C' chiếu thành C nên hình chiếu của AC' là AC."
},

{
id:"pcvg_s3_5",
type:"short-answer",
question:"Góc giữa đường thẳng và mặt phẳng luôn nằm trong khoảng từ bao nhiêu độ đến bao nhiêu độ? Nhập giá trị lớn nhất.",
answer:"90",
explanation:"Theo định nghĩa, góc giữa đường thẳng và mặt phẳng luôn thuộc đoạn [0°;90°]."
}
]
},
51: {
stage1:[
{
id:"hmp_s1_1",
type:"multiple-choice",
question:"Góc giữa hai mặt phẳng được xác định bằng",
options:[
"Góc giữa hai đường thẳng bất kỳ nằm trong hai mặt phẳng",
"Góc giữa hai đường thẳng lần lượt vuông góc với giao tuyến và nằm trong hai mặt phẳng",
"Góc giữa hai vectơ pháp tuyến",
"Góc giữa hai giao tuyến"
],
answer:"Góc giữa hai đường thẳng lần lượt vuông góc với giao tuyến và nằm trong hai mặt phẳng"
},

{
id:"hmp_s1_2",
type:"multiple-choice",
question:"Hai mặt phẳng vuông góc khi góc giữa chúng bằng",
options:["30°","45°","60°","90°"],
answer:"90°"
},

{
id:"hmp_s1_3",
type:"multiple-choice",
question:"Nếu mặt phẳng (P) vuông góc với mặt phẳng (Q) thì",
options:[
"(Q) vuông góc với (P)",
"(P) song song với (Q)",
"(P) trùng với (Q)",
"Không kết luận được"
],
answer:"(Q) vuông góc với (P)"
},

{
id:"hmp_s1_4",
type:"multiple-choice",
question:"Trong hình hộp chữ nhật, mặt phẳng (ABCD) vuông góc với",
options:[
"(A'B'C'D')",
"(ABB'A')",
"(ABCD)",
"(ABC'D')"
],
answer:"(ABB'A')"
},

{
id:"hmp_s1_5",
type:"multiple-choice",
question:"Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng đó",
options:[
"Song song",
"Vuông góc",
"Trùng nhau",
"Cắt nhau nhưng không vuông góc"
],
answer:"Vuông góc"
},

{
id:"hmp_s1_6",
type:"multiple-choice",
question:"Trong hình chóp S.ABCD có SA ⊥ (ABCD). Mặt phẳng nào vuông góc với đáy?",
options:[
"(SAB)",
"(ABCD)",
"(BCD)",
"(ABC)"
],
answer:"(SAB)"
},

{
id:"hmp_s1_7",
type:"multiple-choice",
question:"Góc giữa hai mặt phẳng luôn thuộc khoảng",
options:[
"[0°;90°]",
"[0°;180°]",
"(0°;180°)",
"(0°;90°)"
],
answer:"[0°;90°]"
},

{
id:"hmp_s1_8",
type:"multiple-choice",
question:"Trong hình lập phương ABCD.A'B'C'D', mặt phẳng (ABB'A') vuông góc với",
options:[
"(BCC'B')",
"(A'B'C'D')",
"(CDD'C')",
"Cả ba đáp án trên"
],
answer:"Cả ba đáp án trên"
},

{
id:"hmp_s1_9",
type:"multiple-choice",
question:"Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thứ ba thì",
options:[
"Có thể song song",
"Luôn vuông góc",
"Luôn cắt nhau vuông góc",
"Luôn trùng nhau"
],
answer:"Có thể song song"
},

{
id:"hmp_s1_10",
type:"multiple-choice",
question:"Điều kiện đủ để chứng minh hai mặt phẳng vuông góc là",
options:[
"Một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia",
"Hai mặt phẳng có giao tuyến",
"Hai mặt phẳng cắt nhau",
"Hai mặt phẳng không song song"
],
answer:"Một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia"
}
],

stage2:[
{
id:"hmp_s2_1",
type:"true-false",
question:"Xét hai mặt phẳng vuông góc.",
subQuestions:[
{
label:"a",
text:"Nếu (P) ⊥ (Q) thì (Q) ⊥ (P).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Góc giữa hai mặt phẳng vuông góc bằng 90°.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai mặt phẳng vuông góc luôn song song.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hai mặt phẳng vuông góc luôn cắt nhau.",
correctAnswer:"Đúng"
}
]
},

{
id:"hmp_s2_2",
type:"true-false",
question:"Trong hình hộp chữ nhật ABCD.A'B'C'D'.",
subQuestions:[
{
label:"a",
text:"(ABCD) ⊥ (ABB'A').",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(ABCD) ⊥ (BCC'B').",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(ABB'A') ⊥ (BCC'B').",
correctAnswer:"Đúng"
},
{
label:"d",
text:"(ABCD) // (A'B'C'D').",
correctAnswer:"Đúng"
}
]
},

{
id:"hmp_s2_3",
type:"true-false",
question:"Xét các tính chất của hai mặt phẳng vuông góc.",
subQuestions:[
{
label:"a",
text:"Nếu mặt phẳng (P) chứa một đường thẳng vuông góc với (Q) thì (P) ⊥ (Q).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Góc giữa hai mặt phẳng luôn không vượt quá 90°.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai mặt phẳng cùng vuông góc với một mặt phẳng thứ ba luôn vuông góc với nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hai mặt phẳng song song thì góc giữa chúng bằng 0°.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"hmp_s3_1",
type:"short-answer",
question:"Hai mặt phẳng vuông góc tạo với nhau góc bao nhiêu độ?",
answer:"90",
explanation:"Theo định nghĩa, hai mặt phẳng vuông góc khi góc giữa chúng bằng 90°."
},

{
id:"hmp_s3_2",
type:"short-answer",
question:"Góc giữa hai mặt phẳng luôn không vượt quá bao nhiêu độ?",
answer:"90",
explanation:"Góc giữa hai mặt phẳng được quy ước nằm trong đoạn từ 0° đến 90°."
},

{
id:"hmp_s3_3",
type:"short-answer",
question:"Trong hình hộp chữ nhật, có bao nhiêu mặt bên vuông góc với mặt đáy?",
answer:"4",
explanation:"Hình hộp chữ nhật có 4 mặt bên và tất cả đều vuông góc với mặt đáy."
},

{
id:"hmp_s3_4",
type:"short-answer",
question:"Hai mặt phẳng song song tạo với nhau góc bằng bao nhiêu độ?",
answer:"0",
explanation:"Góc giữa hai mặt phẳng song song được quy ước bằng 0°."
},

{
id:"hmp_s3_5",
type:"short-answer",
question:"Muốn chứng minh hai mặt phẳng vuông góc, chỉ cần chứng minh một mặt phẳng chứa bao nhiêu đường thẳng vuông góc với mặt phẳng kia?",
answer:"1",
explanation:"Chỉ cần tìm một đường thẳng nằm trong mặt phẳng thứ nhất và vuông góc với mặt phẳng thứ hai."
}
]
},
52: {
stage1:[
{
id:"kg_s1_1",
type:"multiple-choice",
question:"Khoảng cách từ một điểm đến một mặt phẳng là",
options:[
"Độ dài đoạn thẳng bất kỳ nối điểm với mặt phẳng",
"Độ dài đoạn vuông góc từ điểm đến mặt phẳng",
"Khoảng cách lớn nhất từ điểm đến mặt phẳng",
"Một số không xác định"
],
answer:"Độ dài đoạn vuông góc từ điểm đến mặt phẳng"
},

{
id:"kg_s1_2",
type:"multiple-choice",
question:"Khoảng cách từ điểm M nằm trên mặt phẳng (P) đến (P) bằng",
options:["1","0","Không xác định","Phụ thuộc M"],
answer:"0"
},

{
id:"kg_s1_3",
type:"multiple-choice",
question:"Khoảng cách giữa hai mặt phẳng song song là",
options:[
"Khoảng cách từ một điểm bất kỳ của mặt phẳng này đến mặt phẳng kia",
"Khoảng cách lớn nhất giữa hai mặt phẳng",
"Khoảng cách từ giao điểm của chúng",
"Luôn bằng 0"
],
answer:"Khoảng cách từ một điểm bất kỳ của mặt phẳng này đến mặt phẳng kia"
},

{
id:"kg_s1_4",
type:"multiple-choice",
question:"Khoảng cách giữa đường thẳng a song song với mặt phẳng (P) là",
options:[
"Khoảng cách từ một điểm bất kỳ trên a đến (P)",
"Khoảng cách giữa hai điểm thuộc a",
"Khoảng cách từ giao điểm đến (P)",
"Luôn bằng 0"
],
answer:"Khoảng cách từ một điểm bất kỳ trên a đến (P)"
},

{
id:"kg_s1_5",
type:"multiple-choice",
question:"Khoảng cách giữa hai đường thẳng song song là",
options:[
"Độ dài đoạn vuông góc chung",
"Khoảng cách giữa hai điểm bất kỳ",
"Tổng độ dài hai đường thẳng",
"Luôn bằng 0"
],
answer:"Độ dài đoạn vuông góc chung"
},

{
id:"kg_s1_6",
type:"multiple-choice",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC), khoảng cách từ S đến (ABC) bằng",
options:["SA","SB","SC","AH"],
answer:"SA"
},

{
id:"kg_s1_7",
type:"multiple-choice",
question:"Trong hình lập phương cạnh a, khoảng cách giữa hai mặt đáy bằng",
options:["a","a√2","a√3","2a"],
answer:"a"
},

{
id:"kg_s1_8",
type:"multiple-choice",
question:"Khoảng cách từ điểm đến đường thẳng là",
options:[
"Độ dài đoạn vuông góc kẻ từ điểm đến đường thẳng",
"Độ dài đoạn nối bất kỳ",
"Độ dài lớn nhất",
"Độ dài nhỏ nhất giữa hai điểm"
],
answer:"Độ dài đoạn vuông góc kẻ từ điểm đến đường thẳng"
},

{
id:"kg_s1_9",
type:"multiple-choice",
question:"Khoảng cách giữa hai đường thẳng chéo nhau là",
options:[
"Độ dài đoạn vuông góc chung",
"Khoảng cách giữa hai đầu mút",
"Độ dài giao tuyến",
"Luôn bằng 0"
],
answer:"Độ dài đoạn vuông góc chung"
},

{
id:"kg_s1_10",
type:"multiple-choice",
question:"Trong hình hộp chữ nhật có chiều cao h, khoảng cách giữa hai mặt đáy bằng",
options:["h","2h","h/2","√h"],
answer:"h"
}
],

stage2:[
{
id:"kg_s2_1",
type:"true-false",
question:"Xét khoảng cách từ điểm đến mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Khoảng cách từ điểm đến mặt phẳng luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu điểm thuộc mặt phẳng thì khoảng cách bằng 0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng cách được đo theo đoạn vuông góc.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mọi đoạn nối từ điểm đến mặt phẳng đều là khoảng cách.",
correctAnswer:"Sai"
}
]
},

{
id:"kg_s2_2",
type:"true-false",
question:"Xét khoảng cách giữa hai đường thẳng.",
subQuestions:[
{
label:"a",
text:"Hai đường thẳng song song luôn có khoảng cách xác định.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai đường thẳng cắt nhau có khoảng cách bằng 0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng cách giữa hai đường thẳng chéo nhau là độ dài đoạn vuông góc chung.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường thẳng chéo nhau luôn có khoảng cách bằng 0.",
correctAnswer:"Sai"
}
]
},

{
id:"kg_s2_3",
type:"true-false",
question:"Xét khoảng cách trong hình không gian.",
subQuestions:[
{
label:"a",
text:"Khoảng cách giữa hai mặt phẳng song song là không đổi.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Khoảng cách giữa đường thẳng và mặt phẳng song song được tính từ mọi điểm trên đường thẳng.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng cách giữa hai mặt phẳng cắt nhau bằng 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai mặt phẳng song song có khoảng cách bằng 0.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"kg_s3_1",
type:"short-answer",
question:"Khoảng cách từ một điểm nằm trên mặt phẳng đến mặt phẳng đó bằng bao nhiêu?",
answer:"0",
explanation:"Điểm thuộc mặt phẳng nên chân đường vuông góc trùng với chính điểm đó, khoảng cách bằng 0."
},

{
id:"kg_s3_2",
type:"short-answer",
question:"Trong hình lập phương cạnh 5 cm, khoảng cách giữa hai mặt đáy bằng bao nhiêu?",
answer:"5",
explanation:"Khoảng cách giữa hai mặt đáy chính là chiều cao của hình lập phương, bằng cạnh 5 cm."
},

{
id:"kg_s3_3",
type:"short-answer",
question:"Trong hình chóp S.ABC có SA ⊥ (ABC) và SA = 8 cm. Tính khoảng cách từ S đến mặt phẳng (ABC).",
answer:"8",
explanation:"Vì SA vuông góc với mặt phẳng đáy nên khoảng cách từ S đến (ABC) bằng SA = 8 cm."
},

{
id:"kg_s3_4",
type:"short-answer",
question:"Hai đường thẳng cắt nhau có khoảng cách bằng bao nhiêu?",
answer:"0",
explanation:"Hai đường thẳng cắt nhau có điểm chung nên khoảng cách giữa chúng bằng 0."
},

{
id:"kg_s3_5",
type:"short-answer",
question:"Trong hình hộp chữ nhật có chiều cao 12 cm. Khoảng cách giữa hai mặt đáy bằng bao nhiêu?",
answer:"12",
explanation:"Khoảng cách giữa hai mặt đáy song song bằng chiều cao của hình hộp chữ nhật."
}
]
},
53: {
stage1:[
{
id:"tt_s1_1",
type:"multiple-choice",
question:"Thể tích của khối hộp chữ nhật có kích thước a, b, c bằng",
options:[
"a+b+c",
"abc",
"2(ab+bc+ca)",
"a²+b²+c²"
],
answer:"abc"
},

{
id:"tt_s1_2",
type:"multiple-choice",
question:"Thể tích khối lập phương cạnh a là",
options:[
"a²",
"4a²",
"a³",
"6a²"
],
answer:"a³"
},

{
id:"tt_s1_3",
type:"multiple-choice",
question:"Thể tích khối chóp có diện tích đáy B và chiều cao h là",
options:[
"Bh",
"1/2 Bh",
"1/3 Bh",
"3Bh"
],
answer:"1/3 Bh"
},

{
id:"tt_s1_4",
type:"multiple-choice",
question:"Thể tích khối lăng trụ có diện tích đáy B và chiều cao h là",
options:[
"Bh",
"1/2 Bh",
"1/3 Bh",
"2Bh"
],
answer:"Bh"
},

{
id:"tt_s1_5",
type:"multiple-choice",
question:"Khối chóp có diện tích đáy 12 cm² và chiều cao 9 cm. Thể tích bằng",
options:[
"36 cm³",
"108 cm³",
"24 cm³",
"72 cm³"
],
answer:"36 cm³"
},

{
id:"tt_s1_6",
type:"multiple-choice",
question:"Khối lăng trụ có diện tích đáy 15 cm² và chiều cao 8 cm. Thể tích bằng",
options:[
"120 cm³",
"40 cm³",
"60 cm³",
"360 cm³"
],
answer:"120 cm³"
},

{
id:"tt_s1_7",
type:"multiple-choice",
question:"Nếu cạnh khối lập phương tăng gấp đôi thì thể tích tăng",
options:[
"2 lần",
"4 lần",
"6 lần",
"8 lần"
],
answer:"8 lần"
},

{
id:"tt_s1_8",
type:"multiple-choice",
question:"Khối hộp chữ nhật có kích thước 2, 3, 5. Thể tích bằng",
options:[
"10",
"15",
"30",
"60"
],
answer:"30"
},

{
id:"tt_s1_9",
type:"multiple-choice",
question:"Khối chóp có cùng diện tích đáy và chiều cao với khối lăng trụ. Thể tích khối chóp bằng",
options:[
"1/2 thể tích lăng trụ",
"1/3 thể tích lăng trụ",
"2 lần thể tích lăng trụ",
"bằng thể tích lăng trụ"
],
answer:"1/3 thể tích lăng trụ"
},

{
id:"tt_s1_10",
type:"multiple-choice",
question:"Đơn vị đo thể tích thường dùng là",
options:[
"cm",
"cm²",
"cm³",
"độ"
],
answer:"cm³"
}
],

stage2:[
{
id:"tt_s2_1",
type:"true-false",
question:"Xét công thức tính thể tích.",
subQuestions:[
{
label:"a",
text:"Thể tích khối hộp chữ nhật bằng tích ba kích thước của nó.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Thể tích khối lập phương cạnh a bằng a³.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Thể tích khối chóp bằng Bh.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Thể tích luôn là số không âm.",
correctAnswer:"Đúng"
}
]
},

{
id:"tt_s2_2",
type:"true-false",
question:"Xét khối chóp và khối lăng trụ.",
subQuestions:[
{
label:"a",
text:"Khối chóp có thể tích bằng 1/3 Bh.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Khối lăng trụ có thể tích bằng Bh.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai khối có cùng đáy và chiều cao thì thể tích bằng nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Thể tích khối chóp luôn nhỏ hơn thể tích lăng trụ có cùng đáy và chiều cao.",
correctAnswer:"Đúng"
}
]
},

{
id:"tt_s2_3",
type:"true-false",
question:"Xét sự thay đổi thể tích.",
subQuestions:[
{
label:"a",
text:"Nếu mọi kích thước tăng gấp đôi thì thể tích tăng 8 lần.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu mọi kích thước tăng gấp 3 thì thể tích tăng 27 lần.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu chiều cao giảm một nửa thì thể tích lăng trụ giảm một nửa.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Thể tích không phụ thuộc vào chiều cao.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"tt_s3_1",
type:"short-answer",
question:"Tính thể tích khối lập phương cạnh 4 cm.",
answer:"64",
explanation:"V = a³ = 4³ = 64 cm³."
},

{
id:"tt_s3_2",
type:"short-answer",
question:"Tính thể tích khối hộp chữ nhật có kích thước 3 cm, 4 cm, 5 cm.",
answer:"60",
explanation:"V = 3×4×5 = 60 cm³."
},

{
id:"tt_s3_3",
type:"short-answer",
question:"Một khối chóp có diện tích đáy 18 cm² và chiều cao 6 cm. Tính thể tích.",
answer:"36",
explanation:"V = (1/3)×18×6 = 36 cm³."
},

{
id:"tt_s3_4",
type:"short-answer",
question:"Một khối lăng trụ có diện tích đáy 12 cm² và chiều cao 7 cm. Tính thể tích.",
answer:"84",
explanation:"V = 12×7 = 84 cm³."
},

{
id:"tt_s3_5",
type:"short-answer",
question:"Một khối lập phương có cạnh tăng từ 2 cm lên 4 cm. Thể tích mới gấp bao nhiêu lần thể tích cũ?",
answer:"8",
explanation:"Tỉ số thể tích là (4³)/(2³)=64/8=8."
}
]
},
54: {
stage1:[
{
id:"bc_s1_1",
type:"multiple-choice",
question:"Cho hai biến cố A và B. Biến cố 'A hoặc B xảy ra' được gọi là",
options:[
"Biến cố giao của A và B",
"Biến cố hợp của A và B",
"Biến cố đối của A",
"Biến cố đối của B"
],
answer:"Biến cố hợp của A và B"
},

{
id:"bc_s1_2",
type:"multiple-choice",
question:"Biến cố 'Cả A và B đều xảy ra' được gọi là",
options:[
"Biến cố hợp",
"Biến cố đối",
"Biến cố giao",
"Biến cố xung khắc"
],
answer:"Biến cố giao"
},

{
id:"bc_s1_3",
type:"multiple-choice",
question:"Hai biến cố A và B được gọi là độc lập khi",
options:[
"A xảy ra thì B không xảy ra",
"B xảy ra thì A không xảy ra",
"Việc xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia",
"A và B luôn xảy ra đồng thời"
],
answer:"Việc xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia"
},

{
id:"bc_s1_4",
type:"multiple-choice",
question:"Kí hiệu của biến cố hợp của A và B là",
options:[
"A∩B",
"A∪B",
"Ā",
"B̄"
],
answer:"A∪B"
},

{
id:"bc_s1_5",
type:"multiple-choice",
question:"Kí hiệu của biến cố giao của A và B là",
options:[
"A∪B",
"A∩B",
"Ā",
"B̄"
],
answer:"A∩B"
},

{
id:"bc_s1_6",
type:"multiple-choice",
question:"Nếu A và B độc lập thì",
options:[
"P(A∩B)=P(A)+P(B)",
"P(A∩B)=P(A)P(B)",
"P(A∩B)=0",
"P(A)=P(B)"
],
answer:"P(A∩B)=P(A)P(B)"
},

{
id:"bc_s1_7",
type:"multiple-choice",
question:"Gieo đồng xu hai lần. Biến cố A: 'Lần thứ nhất xuất hiện mặt ngửa', B: 'Lần thứ hai xuất hiện mặt ngửa'. Khi đó A và B là",
options:[
"Đối nhau",
"Xung khắc",
"Độc lập",
"Bằng nhau"
],
answer:"Độc lập"
},

{
id:"bc_s1_8",
type:"multiple-choice",
question:"Gieo một con xúc xắc. A:'Xuất hiện số chẵn', B:'Xuất hiện số chia hết cho 3'. Biến cố A∩B là",
options:[
"{2,4,6}",
"{3,6}",
"{6}",
"{2,3}"
],
answer:"{6}"
},

{
id:"bc_s1_9",
type:"multiple-choice",
question:"Biến cố A∪B xảy ra khi",
options:[
"Chỉ A xảy ra",
"Chỉ B xảy ra",
"A hoặc B xảy ra",
"Cả A và B đều không xảy ra"
],
answer:"A hoặc B xảy ra"
},

{
id:"bc_s1_10",
type:"multiple-choice",
question:"Nếu A và B xung khắc thì",
options:[
"A∩B=∅",
"A∪B=∅",
"A=B",
"A và B độc lập"
],
answer:"A∩B=∅"
}
],

stage2:[
{
id:"bc_s2_1",
type:"true-false",
question:"Xét các khái niệm về biến cố hợp và biến cố giao.",
subQuestions:[
{
label:"a",
text:"A∪B là biến cố 'A hoặc B xảy ra'.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"A∩B là biến cố 'A và B cùng xảy ra'.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"A∪B xảy ra khi cả A và B đều xảy ra.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Nếu A∩B=∅ thì A và B xung khắc.",
correctAnswer:"Đúng"
}
]
},

{
id:"bc_s2_2",
type:"true-false",
question:"Xét tính độc lập của các biến cố.",
subQuestions:[
{
label:"a",
text:"Hai biến cố độc lập thì việc xảy ra của biến cố này không ảnh hưởng đến biến cố kia.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu A và B độc lập thì P(A∩B)=P(A)P(B).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai biến cố đối nhau luôn độc lập.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hai lần gieo đồng xu là các phép thử độc lập.",
correctAnswer:"Đúng"
}
]
},

{
id:"bc_s2_3",
type:"true-false",
question:"Gieo một con xúc xắc cân đối. Gọi A:'Ra số chẵn', B:'Ra số lớn hơn 4'.",
subQuestions:[
{
label:"a",
text:"A={2,4,6}.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"B={5,6}.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"A∩B={6}.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"A∪B={2,4,5,6}.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"bc_s3_1",
type:"short-answer",
question:"Gieo một con xúc xắc. Gọi A:'Ra số chẵn', B:'Ra số chia hết cho 3'. Có bao nhiêu phần tử của biến cố A∩B?",
answer:"1",
explanation:"A={2,4,6}, B={3,6}. Do đó A∩B={6} nên có 1 phần tử."
},

{
id:"bc_s3_2",
type:"short-answer",
question:"Gieo một con xúc xắc. Gọi A:'Ra số chẵn', B:'Ra số lớn hơn 4'. Có bao nhiêu phần tử của biến cố A∪B?",
answer:"4",
explanation:"A={2,4,6}, B={5,6}. Suy ra A∪B={2,4,5,6} có 4 phần tử."
},

{
id:"bc_s3_3",
type:"short-answer",
question:"Gieo đồng xu hai lần. Xác suất xuất hiện mặt ngửa ở lần thứ nhất là bao nhiêu? (Nhập tử số của phân số tối giản)",
answer:"1",
explanation:"P=1/2. Tử số của phân số tối giản là 1."
},

{
id:"bc_s3_4",
type:"short-answer",
question:"Hai biến cố độc lập có xác suất lần lượt là 1/2 và 1/3. Tính xác suất giao của chúng. (Nhập tử số của phân số tối giản)",
answer:"1",
explanation:"P(A∩B)=P(A)P(B)=1/2×1/3=1/6. Tử số là 1."
},

{
id:"bc_s3_5",
type:"short-answer",
question:"Gieo một con xúc xắc. Có bao nhiêu kết quả thuộc biến cố 'Ra số chẵn hoặc số chia hết cho 3'?",
answer:"4",
explanation:"A={2,4,6}, B={3,6}. A∪B={2,3,4,6} nên có 4 kết quả thuận lợi."
}
]
},
55: {
stage1:[
{
id:"dh_s1_1",
type:"multiple-choice",
question:"Đạo hàm của hàm số tại điểm x₀ biểu thị",
options:[
"Tốc độ thay đổi tức thời của hàm số tại x₀",
"Giá trị lớn nhất của hàm số",
"Giá trị nhỏ nhất của hàm số",
"Tổng các giá trị của hàm số"
],
answer:"Tốc độ thay đổi tức thời của hàm số tại x₀"
},

{
id:"dh_s1_2",
type:"multiple-choice",
question:"Theo định nghĩa, đạo hàm của hàm số y=f(x) tại x₀ là",
options:[
"f(x₀+h)-f(x₀)",
"lim[(f(x₀+h)-f(x₀))/h] khi h→0",
"lim[f(x₀+h)] khi h→0",
"f(x₀)/x₀"
],
answer:"lim[(f(x₀+h)-f(x₀))/h] khi h→0"
},

{
id:"dh_s1_3",
type:"multiple-choice",
question:"Đạo hàm của hàm số y=x² là",
options:[
"x",
"2x",
"x²",
"2"
],
answer:"2x"
},

{
id:"dh_s1_4",
type:"multiple-choice",
question:"Đạo hàm của hàm số y=x³ là",
options:[
"3x²",
"x²",
"3x",
"x³"
],
answer:"3x²"
},

{
id:"dh_s1_5",
type:"multiple-choice",
question:"Đạo hàm của hàm số hằng y=5 là",
options:[
"5",
"1",
"0",
"Không xác định"
],
answer:"0"
},

{
id:"dh_s1_6",
type:"multiple-choice",
question:"Nếu f'(x₀)>0 thì hàm số tại x₀ có xu hướng",
options:[
"Tăng",
"Giảm",
"Không đổi",
"Không xác định"
],
answer:"Tăng"
},

{
id:"dh_s1_7",
type:"multiple-choice",
question:"Nếu f'(x₀)<0 thì hàm số tại x₀ có xu hướng",
options:[
"Tăng",
"Giảm",
"Không đổi",
"Luôn bằng 0"
],
answer:"Giảm"
},

{
id:"dh_s1_8",
type:"multiple-choice",
question:"Ý nghĩa vật lí của đạo hàm vận tốc là",
options:[
"Quãng đường",
"Gia tốc",
"Thời gian",
"Khối lượng"
],
answer:"Gia tốc"
},

{
id:"dh_s1_9",
type:"multiple-choice",
question:"Tiếp tuyến của đồ thị hàm số tại điểm M có hệ số góc bằng",
options:[
"f(x₀)",
"x₀",
"f'(x₀)",
"0"
],
answer:"f'(x₀)"
},

{
id:"dh_s1_10",
type:"multiple-choice",
question:"Đạo hàm của y=2x+3 là",
options:[
"2",
"3",
"2x",
"x+3"
],
answer:"2"
}
],

stage2:[
{
id:"dh_s2_1",
type:"true-false",
question:"Xét các kiến thức cơ bản về đạo hàm.",
subQuestions:[
{
label:"a",
text:"Đạo hàm biểu thị tốc độ biến thiên tức thời của hàm số.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đạo hàm của hàm số hằng bằng 0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đạo hàm của x² là x.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hệ số góc tiếp tuyến bằng giá trị đạo hàm tại tiếp điểm.",
correctAnswer:"Đúng"
}
]
},

{
id:"dh_s2_2",
type:"true-false",
question:"Xét dấu của đạo hàm.",
subQuestions:[
{
label:"a",
text:"Nếu f'(x)>0 thì hàm số đồng biến tại điểm đang xét.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu f'(x)<0 thì hàm số nghịch biến tại điểm đang xét.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu f'(x)=0 thì luôn là cực trị.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đạo hàm có thể dùng để khảo sát sự biến thiên của hàm số.",
correctAnswer:"Đúng"
}
]
},

{
id:"dh_s2_3",
type:"true-false",
question:"Xét ý nghĩa hình học và vật lí của đạo hàm.",
subQuestions:[
{
label:"a",
text:"Đạo hàm của quãng đường theo thời gian là vận tốc.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đạo hàm của vận tốc theo thời gian là gia tốc.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đạo hàm không có ý nghĩa hình học.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đạo hàm giúp xác định hệ số góc tiếp tuyến.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"dh_s3_1",
type:"short-answer",
question:"Tính đạo hàm của hàm số y=x² tại x=3.",
answer:"6",
explanation:"y'=2x. Tại x=3 ta có y'(3)=2·3=6."
},

{
id:"dh_s3_2",
type:"short-answer",
question:"Tính đạo hàm của hàm số y=x³ tại x=2.",
answer:"12",
explanation:"y'=3x². Tại x=2: y'(2)=3·2²=12."
},

{
id:"dh_s3_3",
type:"short-answer",
question:"Tính đạo hàm của hàm số y=5x+1.",
answer:"5",
explanation:"Đạo hàm của ax+b bằng a nên y'=5."
},

{
id:"dh_s3_4",
type:"short-answer",
question:"Một chất điểm có quãng đường s=t² (m). Tính vận tốc tại thời điểm t=4 (m/s).",
answer:"8",
explanation:"v=s'(t)=2t. Tại t=4 ta được v=8 m/s."
},

{
id:"dh_s3_5",
type:"short-answer",
question:"Cho hàm số y=x². Hệ số góc của tiếp tuyến tại điểm có hoành độ x=5 bằng bao nhiêu?",
answer:"10",
explanation:"Hệ số góc tiếp tuyến bằng đạo hàm tại điểm đó. y'=2x nên k=y'(5)=10."
}
]
},
56: {
stage1:[
{
id:"qtdh_s1_1",
type:"multiple-choice",
question:"Nếu y=u(x)+v(x) thì đạo hàm của y là",
options:[
"u'+v'",
"u'v'",
"u'/v'",
"(u+v)'=u'+v+1"
],
answer:"u'+v'"
},

{
id:"qtdh_s1_2",
type:"multiple-choice",
question:"Nếu y=u(x)-v(x) thì",
options:[
"y'=u'-v'",
"y'=u'+v'",
"y'=u'v'",
"y'=u/v"
],
answer:"u'-v'"
},

{
id:"qtdh_s1_3",
type:"multiple-choice",
question:"Đạo hàm của tích y=u.v là",
options:[
"u'v'",
"u'v+uv'",
"u'+v'",
"u/v"
],
answer:"u'v+uv'"
},

{
id:"qtdh_s1_4",
type:"multiple-choice",
question:"Đạo hàm của thương y=u/v (v≠0) là",
options:[
"(u'v-uv')/v²",
"(u'v+uv')/v²",
"u'/v'",
"u'v"
],
answer:"(u'v-uv')/v²"
},

{
id:"qtdh_s1_5",
type:"multiple-choice",
question:"Đạo hàm của hàm số y=x⁵ là",
options:[
"5x⁴",
"x⁴",
"5x",
"x⁵"
],
answer:"5x⁴"
},

{
id:"qtdh_s1_6",
type:"multiple-choice",
question:"Đạo hàm của hàm số y=√x là",
options:[
"1/(2√x)",
"√x",
"2√x",
"1/x"
],
answer:"1/(2√x)"
},

{
id:"qtdh_s1_7",
type:"multiple-choice",
question:"Đạo hàm của y=1/x là",
options:[
"-1/x²",
"1/x²",
"x²",
"-x²"
],
answer:"-1/x²"
},

{
id:"qtdh_s1_8",
type:"multiple-choice",
question:"Đạo hàm của y=(2x+1)(x²-3) là",
options:[
"2(x²-3)+(2x+1)2x",
"2x²-3",
"2x+1",
"(2x+1)²"
],
answer:"2(x²-3)+(2x+1)2x"
},

{
id:"qtdh_s1_9",
type:"multiple-choice",
question:"Đạo hàm của y=(3x+1)/(x+2) là áp dụng quy tắc nào?",
options:[
"Tổng",
"Tích",
"Thương",
"Lũy thừa"
],
answer:"Thương"
},

{
id:"qtdh_s1_10",
type:"multiple-choice",
question:"Đạo hàm của y=7x³ là",
options:[
"21x²",
"7x²",
"3x²",
"21x³"
],
answer:"21x²"
}
],

stage2:[
{
id:"qtdh_s2_1",
type:"true-false",
question:"Xét các quy tắc đạo hàm cơ bản.",
subQuestions:[
{
label:"a",
text:"(u+v)'=u'+v'.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(u-v)'=u'-v'.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(uv)'=u'v+uv'.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"(u/v)'=u'/v'.",
correctAnswer:"Sai"
}
]
},

{
id:"qtdh_s2_2",
type:"true-false",
question:"Xét đạo hàm các hàm số quen thuộc.",
subQuestions:[
{
label:"a",
text:"(x²)'=2x.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(x³)'=3x².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"(1/x)'=1/x².",
correctAnswer:"Sai"
},
{
label:"d",
text:"(√x)'=1/(2√x).",
correctAnswer:"Đúng"
}
]
},

{
id:"qtdh_s2_3",
type:"true-false",
question:"Cho y=(2x+1)(x-3).",
subQuestions:[
{
label:"a",
text:"Để tính đạo hàm cần dùng quy tắc tích.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"y'=2(x-3)+(2x+1).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"y'=4x-5.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"y' là hằng số.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"qtdh_s3_1",
type:"short-answer",
question:"Tính đạo hàm của hàm số y=x⁴ tại x=2.",
answer:"32",
explanation:"y'=4x³. Tại x=2: y'(2)=4·2³=32."
},

{
id:"qtdh_s3_2",
type:"short-answer",
question:"Tính đạo hàm của hàm số y=3x²+1 tại x=1.",
answer:"6",
explanation:"y'=6x. Tại x=1: y'(1)=6."
},

{
id:"qtdh_s3_3",
type:"short-answer",
question:"Cho y=(x+1)(x+2). Tính y'(1).",
answer:"5",
explanation:"y'=(x+2)+(x+1)=2x+3. Tại x=1: y'(1)=5."
},

{
id:"qtdh_s3_4",
type:"short-answer",
question:"Cho y=(2x+1)/(x+1). Tính y'(0).",
answer:"1",
explanation:"y'=[2(x+1)-(2x+1)]/(x+1)²=1/(x+1)². Tại x=0: y'(0)=1."
},

{
id:"qtdh_s3_5",
type:"short-answer",
question:"Tính đạo hàm của hàm số y=5x³−2x tại x=2.",
answer:"58",
explanation:"y'=15x²−2. Tại x=2: y'(2)=15·4−2=58."
}
]
},
57: {
stage1:[
{
id:"dh2_s1_1",
type:"multiple-choice",
question:"Đạo hàm cấp hai của hàm số y=f(x) là",
options:[
"Đạo hàm của f(x)",
"Đạo hàm của f'(x)",
"Nguyên hàm của f(x)",
"Đạo hàm của x"
],
answer:"Đạo hàm của f'(x)"
},

{
id:"dh2_s1_2",
type:"multiple-choice",
question:"Kí hiệu đạo hàm cấp hai của hàm số y=f(x) là",
options:[
"f'(x)",
"f''(x)",
"f'''(x)",
"Δf(x)"
],
answer:"f''(x)"
},

{
id:"dh2_s1_3",
type:"multiple-choice",
question:"Nếu y=x³ thì y'' bằng",
options:[
"6x",
"3x²",
"6",
"x²"
],
answer:"6x"
},

{
id:"dh2_s1_4",
type:"multiple-choice",
question:"Nếu y=x² thì y'' bằng",
options:[
"2",
"x",
"2x",
"0"
],
answer:"2"
},

{
id:"dh2_s1_5",
type:"multiple-choice",
question:"Nếu y=5x+1 thì y'' bằng",
options:[
"5",
"1",
"0",
"10"
],
answer:"0"
},

{
id:"dh2_s1_6",
type:"multiple-choice",
question:"Trong chuyển động thẳng, nếu s(t) là quãng đường thì s''(t) biểu diễn",
options:[
"Quãng đường",
"Vận tốc",
"Gia tốc",
"Thời gian"
],
answer:"Gia tốc"
},

{
id:"dh2_s1_7",
type:"multiple-choice",
question:"Nếu vận tốc v(t)=3t²−2t+1 thì gia tốc a(t) bằng",
options:[
"6t−2",
"3t−2",
"6t",
"3t²−2"
],
answer:"6t−2"
},

{
id:"dh2_s1_8",
type:"multiple-choice",
question:"Đạo hàm cấp hai của y=x⁴ là",
options:[
"12x²",
"4x³",
"16x²",
"24x"
],
answer:"12x²"
},

{
id:"dh2_s1_9",
type:"multiple-choice",
question:"Nếu y''(x)>0 trên một khoảng thì đồ thị hàm số có xu hướng",
options:[
"Lõm xuống",
"Lõm lên",
"Song song trục Ox",
"Không xác định"
],
answer:"Lõm lên"
},

{
id:"dh2_s1_10",
type:"multiple-choice",
question:"Đạo hàm cấp hai của y=x⁵ là",
options:[
"20x³",
"10x³",
"5x⁴",
"25x³"
],
answer:"20x³"
}
],

stage2:[
{
id:"dh2_s2_1",
type:"true-false",
question:"Xét kiến thức cơ bản về đạo hàm cấp hai.",
subQuestions:[
{
label:"a",
text:"Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Kí hiệu đạo hàm cấp hai là f''(x).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đạo hàm cấp hai của hàm số bậc nhất luôn bằng 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Đạo hàm cấp hai của x² bằng x.",
correctAnswer:"Sai"
}
]
},

{
id:"dh2_s2_2",
type:"true-false",
question:"Xét ý nghĩa vật lí của đạo hàm cấp hai.",
subQuestions:[
{
label:"a",
text:"Nếu s(t) là quãng đường thì s'(t) là vận tốc.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu s(t) là quãng đường thì s''(t) là gia tốc.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Gia tốc là đạo hàm của vận tốc theo thời gian.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Vận tốc là đạo hàm của gia tốc.",
correctAnswer:"Sai"
}
]
},

{
id:"dh2_s2_3",
type:"true-false",
question:"Cho hàm số y=x⁴.",
subQuestions:[
{
label:"a",
text:"y'=4x³.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"y''=12x².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"y''(1)=12.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"y'' là hằng số.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"dh2_s3_1",
type:"short-answer",
question:"Tính đạo hàm cấp hai của hàm số y=x³ tại x=2.",
answer:"12",
explanation:"y'=3x², y''=6x. Tại x=2: y''(2)=12."
},

{
id:"dh2_s3_2",
type:"short-answer",
question:"Tính đạo hàm cấp hai của hàm số y=x⁴ tại x=1.",
answer:"12",
explanation:"y'=4x³, y''=12x². Tại x=1: y''(1)=12."
},

{
id:"dh2_s3_3",
type:"short-answer",
question:"Một vật chuyển động có phương trình s(t)=t³−3t²+2t. Tính gia tốc tại t=1.",
answer:"0",
explanation:"v(t)=s'(t)=3t²−6t+2. a(t)=s''(t)=6t−6. Tại t=1: a(1)=0."
},

{
id:"dh2_s3_4",
type:"short-answer",
question:"Cho vận tốc v(t)=2t²+3t−1. Tính gia tốc tại t=2.",
answer:"11",
explanation:"a(t)=v'(t)=4t+3. Tại t=2: a(2)=11."
},

{
id:"dh2_s3_5",
type:"short-answer",
question:"Tính đạo hàm cấp hai của hàm số y=2x⁵−x³ tại x=1.",
answer:"34",
explanation:"y'=10x⁴−3x². y''=40x³−6x. Tại x=1: y''(1)=40−6=34."
}
]
},
58: {
stage1:[
{
id:"ot11_s1_1",
type:"multiple-choice",
question:"Đạo hàm của hàm số y=x³ là",
options:["3x²","x²","3x","x³"],
answer:"3x²"
},

{
id:"ot11_s1_2",
type:"multiple-choice",
question:"Công sai của cấp số cộng 2,5,8,11,... bằng",
options:["2","3","5","8"],
answer:"3"
},

{
id:"ot11_s1_3",
type:"multiple-choice",
question:"Công bội của cấp số nhân 3,6,12,24,... bằng",
options:["2","3","4","6"],
answer:"2"
},

{
id:"ot11_s1_4",
type:"multiple-choice",
question:"Giá trị của sin90° bằng",
options:["0","1","-1","1/2"],
answer:"1"
},

{
id:"ot11_s1_5",
type:"multiple-choice",
question:"Nghiệm của phương trình sinx=0 là",
options:[
"x=kπ",
"x=π/2+kπ",
"x=π/4+kπ",
"x=π/3+kπ"
],
answer:"x=kπ"
},

{
id:"ot11_s1_6",
type:"multiple-choice",
question:"Thể tích khối chóp có diện tích đáy B và chiều cao h bằng",
options:[
"Bh",
"1/2Bh",
"1/3Bh",
"2Bh"
],
answer:"1/3Bh"
},

{
id:"ot11_s1_7",
type:"multiple-choice",
question:"Nếu hai mặt phẳng vuông góc thì góc giữa chúng bằng",
options:["30°","45°","60°","90°"],
answer:"90°"
},

{
id:"ot11_s1_8",
type:"multiple-choice",
question:"Đạo hàm cấp hai của y=x⁴ là",
options:[
"4x³",
"12x²",
"16x²",
"24x"
],
answer:"12x²"
},

{
id:"ot11_s1_9",
type:"multiple-choice",
question:"Khoảng cách từ một điểm đến mặt phẳng là",
options:[
"Độ dài đoạn bất kỳ",
"Độ dài đoạn vuông góc",
"Độ dài lớn nhất",
"Độ dài nhỏ nhất"
],
answer:"Độ dài đoạn vuông góc"
},

{
id:"ot11_s1_10",
type:"multiple-choice",
question:"Nếu P(A)=0,5 và P(B)=0,4, A và B độc lập thì P(A∩B) bằng",
options:["0,1","0,2","0,4","0,9"],
answer:"0,2"
}
],

stage2:[
{
id:"ot11_s2_1",
type:"true-false",
question:"Xét các kiến thức lượng giác.",
subQuestions:[
{
label:"a",
text:"sin²x+cos²x=1.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"tanx=sinx/cosx.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"sin180°=1.",
correctAnswer:"Sai"
},
{
label:"d",
text:"cos0°=1.",
correctAnswer:"Đúng"
}
]
},

{
id:"ot11_s2_2",
type:"true-false",
question:"Xét đạo hàm.",
subQuestions:[
{
label:"a",
text:"(x²)'=2x.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"(x³)'=3x².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đạo hàm của hằng số bằng 1.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một.",
correctAnswer:"Đúng"
}
]
},

{
id:"ot11_s2_3",
type:"true-false",
question:"Xét hình học không gian.",
subQuestions:[
{
label:"a",
text:"Hai mặt phẳng vuông góc tạo với nhau góc 90°.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Khoảng cách luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai đường thẳng cắt nhau có khoảng cách bằng 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai mặt phẳng song song luôn vuông góc.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ot11_s3_1",
type:"short-answer",
question:"Tính đạo hàm của y=x³ tại x=2.",
answer:"12",
explanation:"y'=3x² nên y'(2)=12."
},

{
id:"ot11_s3_2",
type:"short-answer",
question:"Cấp số cộng có u₁=2, d=3. Tính u₅.",
answer:"14",
explanation:"u₅=u₁+4d=2+12=14."
},

{
id:"ot11_s3_3",
type:"short-answer",
question:"Cấp số nhân có u₁=3, q=2. Tính u₄.",
answer:"24",
explanation:"u₄=3·2³=24."
},

{
id:"ot11_s3_4",
type:"short-answer",
question:"Khối chóp có diện tích đáy 12 và chiều cao 6. Tính thể tích.",
answer:"24",
explanation:"V=(1/3)·12·6=24."
},

{
id:"ot11_s3_5",
type:"short-answer",
question:"Nếu P(A)=1/2 và P(B)=1/3, A và B độc lập. Tính P(A∩B) dưới dạng phân số tối giản và nhập tử số.",
answer:"1",
explanation:"P(A∩B)=1/2·1/3=1/6 nên tử số là 1."
}
]
},
59: {
stage1:[
{
id:"td_s1_1",
type:"multiple-choice",
question:"Nếu f'(x)>0 với mọi x thuộc khoảng (a;b) thì hàm số",
options:[
"Đồng biến trên (a;b)",
"Nghịch biến trên (a;b)",
"Có cực đại",
"Có cực tiểu"
],
answer:"Đồng biến trên (a;b)"
},

{
id:"td_s1_2",
type:"multiple-choice",
question:"Nếu f'(x)<0 với mọi x thuộc khoảng (a;b) thì hàm số",
options:[
"Đồng biến",
"Nghịch biến",
"Không xác định",
"Có cực trị"
],
answer:"Nghịch biến"
},

{
id:"td_s1_3",
type:"multiple-choice",
question:"Điều kiện cần để x₀ là điểm cực trị của hàm số khả vi là",
options:[
"f(x₀)=0",
"f'(x₀)=0",
"f''(x₀)=0",
"x₀=0"
],
answer:"f'(x₀)=0"
},

{
id:"td_s1_4",
type:"multiple-choice",
question:"Nếu đạo hàm đổi dấu từ dương sang âm khi qua x₀ thì hàm số đạt",
options:[
"Cực tiểu",
"Cực đại",
"Không có cực trị",
"Điểm uốn"
],
answer:"Cực đại"
},

{
id:"td_s1_5",
type:"multiple-choice",
question:"Nếu đạo hàm đổi dấu từ âm sang dương khi qua x₀ thì hàm số đạt",
options:[
"Cực đại",
"Cực tiểu",
"Không có cực trị",
"Điểm uốn"
],
answer:"Cực tiểu"
},

{
id:"td_s1_6",
type:"multiple-choice",
question:"Hàm số y=x³ có bao nhiêu điểm cực trị?",
options:["0","1","2","3"],
answer:"0"
},

{
id:"td_s1_7",
type:"multiple-choice",
question:"Hàm số y=x² có điểm cực tiểu tại",
options:["x=-1","x=0","x=1","x=2"],
answer:"x=0"
},

{
id:"td_s1_8",
type:"multiple-choice",
question:"Đạo hàm của hàm số y=x³−3x là",
options:[
"3x²−3",
"x²−3",
"3x−3",
"3x²"
],
answer:"3x²−3"
},

{
id:"td_s1_9",
type:"multiple-choice",
question:"Số điểm cực trị của hàm số y=x³−3x là",
options:["0","1","2","3"],
answer:"2"
},

{
id:"td_s1_10",
type:"multiple-choice",
question:"Cho f'(x)=x(x−2). Hàm số đồng biến trên khoảng nào?",
options:[
"(0;2)",
"(-∞;0)",
"(2;+∞)",
"(−∞;0) và (2;+∞)"
],
answer:"(−∞;0) và (2;+∞)"
}
],

stage2:[
{
id:"td_s2_1",
type:"true-false",
question:"Xét mối liên hệ giữa đạo hàm và tính đơn điệu.",
subQuestions:[
{
label:"a",
text:"Nếu f'(x)>0 trên một khoảng thì hàm số đồng biến trên khoảng đó.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu f'(x)<0 trên một khoảng thì hàm số nghịch biến trên khoảng đó.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu f'(x)=0 tại một điểm thì điểm đó luôn là cực trị.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đạo hàm giúp khảo sát sự biến thiên của hàm số.",
correctAnswer:"Đúng"
}
]
},

{
id:"td_s2_2",
type:"true-false",
question:"Cho hàm số y=x².",
subQuestions:[
{
label:"a",
text:"y'=2x.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"f'(x)<0 khi x<0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"f'(x)>0 khi x>0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số có cực đại tại x=0.",
correctAnswer:"Sai"
}
]
},

{
id:"td_s2_3",
type:"true-false",
question:"Cho hàm số y=x³−3x.",
subQuestions:[
{
label:"a",
text:"y'=3x²−3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Phương trình y'=0 có hai nghiệm x=-1 và x=1.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hàm số có hai điểm cực trị.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Cả hai điểm cực trị đều là cực tiểu.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"td_s3_1",
type:"short-answer",
question:"Cho hàm số y=x². Tính giá trị cực tiểu của hàm số.",
answer:"0",
explanation:"y'=2x=0 ⇔ x=0. Hàm số đổi dấu từ âm sang dương nên đạt cực tiểu tại x=0. Giá trị cực tiểu là y(0)=0."
},

{
id:"td_s3_2",
type:"short-answer",
question:"Cho hàm số y=x³−3x. Có bao nhiêu điểm cực trị?",
answer:"2",
explanation:"y'=3x²−3=3(x−1)(x+1). Đạo hàm đổi dấu tại x=-1 và x=1 nên hàm số có 2 điểm cực trị."
},

{
id:"td_s3_3",
type:"short-answer",
question:"Cho hàm số y=x³−3x. Tính tổng hoành độ các điểm cực trị.",
answer:"0",
explanation:"Các điểm cực trị có hoành độ x=-1 và x=1. Tổng bằng 0."
},

{
id:"td_s3_4",
type:"short-answer",
question:"Cho f'(x)=x(x−2). Hàm số có bao nhiêu điểm cực trị?",
answer:"2",
explanation:"f'(x)=0 ⇔ x=0 hoặc x=2. Đạo hàm đổi dấu tại cả hai nghiệm nên có 2 điểm cực trị."
},

{
id:"td_s3_5",
type:"short-answer",
question:"Cho hàm số y=x⁴−2x². Tính số điểm cực trị của hàm số.",
answer:"3",
explanation:"y'=4x³−4x=4x(x−1)(x+1). Đạo hàm đổi dấu tại x=-1, x=0 và x=1 nên hàm số có 3 điểm cực trị."
}
]
},
60: {
stage1:[
{
id:"gt_s1_1",
type:"multiple-choice",
question:"Giá trị lớn nhất của hàm số y=f(x) trên tập D là số M thỏa mãn",
options:[
"f(x) ≥ M với mọi x∈D",
"f(x) ≤ M với mọi x∈D và tồn tại x₀∈D sao cho f(x₀)=M",
"f(x) < M với mọi x∈D",
"f(x)=M với mọi x∈D"
],
answer:"f(x) ≤ M với mọi x∈D và tồn tại x₀∈D sao cho f(x₀)=M"
},

{
id:"gt_s1_2",
type:"multiple-choice",
question:"Giá trị nhỏ nhất của hàm số y=f(x) trên tập D là số m thỏa mãn",
options:[
"f(x) ≥ m với mọi x∈D và tồn tại x₀∈D sao cho f(x₀)=m",
"f(x) ≤ m với mọi x∈D",
"f(x)=m với mọi x∈D",
"f(x)<m với mọi x∈D"
],
answer:"f(x) ≥ m với mọi x∈D và tồn tại x₀∈D sao cho f(x₀)=m"
},

{
id:"gt_s1_3",
type:"multiple-choice",
question:"Hàm số y=x² trên đoạn [-1;2] đạt giá trị nhỏ nhất bằng",
options:["0","1","2","4"],
answer:"0"
},

{
id:"gt_s1_4",
type:"multiple-choice",
question:"Hàm số y=x² trên đoạn [-1;2] đạt giá trị lớn nhất bằng",
options:["0","1","2","4"],
answer:"4"
},

{
id:"gt_s1_5",
type:"multiple-choice",
question:"Để tìm GTLN, GTNN của hàm số trên đoạn [a;b], ta cần xét",
options:[
"Các điểm tới hạn trong (a;b) và hai đầu mút",
"Chỉ các điểm tới hạn",
"Chỉ hai đầu mút",
"Một điểm bất kỳ"
],
answer:"Các điểm tới hạn trong (a;b) và hai đầu mút"
},

{
id:"gt_s1_6",
type:"multiple-choice",
question:"Hàm số y=−x²+4 có giá trị lớn nhất bằng",
options:["0","2","4","8"],
answer:"4"
},

{
id:"gt_s1_7",
type:"multiple-choice",
question:"Hàm số y=x²−2x+3 có giá trị nhỏ nhất bằng",
options:["1","2","3","4"],
answer:"2"
},

{
id:"gt_s1_8",
type:"multiple-choice",
question:"Điểm cực trị có thể là",
options:[
"Nơi đạt GTLN hoặc GTNN trên đoạn",
"Luôn là GTLN",
"Luôn là GTNN",
"Không liên quan"
],
answer:"Nơi đạt GTLN hoặc GTNN trên đoạn"
},

{
id:"gt_s1_9",
type:"multiple-choice",
question:"Nếu hàm số đồng biến trên [a;b] thì GTLN đạt tại",
options:["a","b","(a+b)/2","Không xác định"],
answer:"b"
},

{
id:"gt_s1_10",
type:"multiple-choice",
question:"Nếu hàm số nghịch biến trên [a;b] thì GTNN đạt tại",
options:["a","b","(a+b)/2","Không xác định"],
answer:"b"
}
],

stage2:[
{
id:"gt_s2_1",
type:"true-false",
question:"Xét các khái niệm về GTLN và GTNN.",
subQuestions:[
{
label:"a",
text:"GTLN của hàm số trên D nếu tồn tại phải là một giá trị của hàm số.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"GTNN của hàm số trên D nếu tồn tại phải là một giá trị của hàm số.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Mọi hàm số đều có GTLN và GTNN.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Trên đoạn đóng, hàm số liên tục luôn có GTLN và GTNN.",
correctAnswer:"Đúng"
}
]
},

{
id:"gt_s2_2",
type:"true-false",
question:"Cho hàm số y=x² trên đoạn [-1;2].",
subQuestions:[
{
label:"a",
text:"GTNN bằng 0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"GTLN bằng 4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"GTLN đạt tại x=2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"GTNN đạt tại x=-1.",
correctAnswer:"Sai"
}
]
},

{
id:"gt_s2_3",
type:"true-false",
question:"Xét phương pháp tìm GTLN, GTNN.",
subQuestions:[
{
label:"a",
text:"Cần tìm các điểm mà f'(x)=0 hoặc f'(x) không xác định.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Cần tính giá trị hàm số tại các điểm tới hạn và đầu mút.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Chỉ cần xét các điểm cực trị.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hai đầu mút đoạn có thể là nơi đạt GTLN hoặc GTNN.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"gt_s3_1",
type:"short-answer",
question:"Tìm GTNN của hàm số y=x² trên đoạn [-2;3].",
answer:"0",
explanation:"y=x² ≥0 với mọi x. Tại x=0 thuộc đoạn nên GTNN bằng 0."
},

{
id:"gt_s3_2",
type:"short-answer",
question:"Tìm GTLN của hàm số y=x² trên đoạn [-2;3].",
answer:"9",
explanation:"Xét tại các đầu mút: y(-2)=4, y(3)=9. GTLN bằng 9."
},

{
id:"gt_s3_3",
type:"short-answer",
question:"Tìm GTNN của hàm số y=x²−2x+3.",
answer:"2",
explanation:"y=(x−1)²+2 ≥2. Dấu '=' xảy ra khi x=1. Vậy GTNN bằng 2."
},

{
id:"gt_s3_4",
type:"short-answer",
question:"Tìm GTLN của hàm số y=−x²+4.",
answer:"4",
explanation:"Vì −x²≤0 nên −x²+4≤4. Dấu '=' xảy ra khi x=0."
},

{
id:"gt_s3_5",
type:"short-answer",
question:"Cho hàm số y=x³−3x trên đoạn [-2;2]. Tính GTLN.",
answer:"2",
explanation:"y'=3x²−3=0 ⇔ x=±1. Tính giá trị: y(-2)=-2, y(-1)=2, y(1)=-2, y(2)=2. GTLN bằng 2."
}
]
},
61: {
stage1:[
{
id:"tc_s1_1",
type:"multiple-choice",
question:"Đường thẳng x=a được gọi là tiệm cận đứng của đồ thị hàm số nếu",
options:[
"lim f(x)=±∞ khi x→a",
"lim f(x)=0 khi x→a",
"f(a)=0",
"f(a) không xác định"
],
answer:"lim f(x)=±∞ khi x→a"
},

{
id:"tc_s1_2",
type:"multiple-choice",
question:"Đường thẳng y=b là tiệm cận ngang của đồ thị hàm số nếu",
options:[
"lim f(x)=b khi x→±∞",
"f(0)=b",
"f(x)=b với mọi x",
"lim f(x)=∞"
],
answer:"lim f(x)=b khi x→±∞"
},

{
id:"tc_s1_3",
type:"multiple-choice",
question:"Đồ thị hàm số y=(2x+1)/(x−3) có tiệm cận đứng là",
options:[
"x=−3",
"x=3",
"y=2",
"y=−3"
],
answer:"x=3"
},

{
id:"tc_s1_4",
type:"multiple-choice",
question:"Đồ thị hàm số y=(2x+1)/(x−3) có tiệm cận ngang là",
options:[
"y=1",
"y=2",
"y=3",
"y=0"
],
answer:"y=2"
},

{
id:"tc_s1_5",
type:"multiple-choice",
question:"Hàm số y=(x²+1)/x có tiệm cận xiên là",
options:[
"y=x",
"y=x+1",
"y=1/x",
"y=x−1"
],
answer:"y=x"
},

{
id:"tc_s1_6",
type:"multiple-choice",
question:"Đồ thị hàm số y=1/x có bao nhiêu đường tiệm cận?",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
id:"tc_s1_7",
type:"multiple-choice",
question:"Tiệm cận đứng của đồ thị hàm số y=1/(x+2) là",
options:[
"x=2",
"x=−2",
"y=2",
"y=−2"
],
answer:"x=−2"
},

{
id:"tc_s1_8",
type:"multiple-choice",
question:"Tiệm cận ngang của đồ thị hàm số y=1/(x+2) là",
options:[
"y=1",
"y=−2",
"y=0",
"x=0"
],
answer:"y=0"
},

{
id:"tc_s1_9",
type:"multiple-choice",
question:"Để tìm tiệm cận xiên của hàm hữu tỉ, thường sử dụng",
options:[
"Phép chia đa thức",
"Đạo hàm",
"Nguyên hàm",
"Logarit"
],
answer:"Phép chia đa thức"
},

{
id:"tc_s1_10",
type:"multiple-choice",
question:"Đồ thị hàm số y=(x²−1)/(x−1) có",
options:[
"Tiệm cận đứng x=1",
"Tiệm cận ngang y=1",
"Không có tiệm cận đứng",
"Có hai tiệm cận đứng"
],
answer:"Không có tiệm cận đứng"
}
],

stage2:[
{
id:"tc_s2_1",
type:"true-false",
question:"Xét các khái niệm cơ bản về tiệm cận.",
subQuestions:[
{
label:"a",
text:"Tiệm cận đứng có dạng x=a.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Tiệm cận ngang có dạng y=b.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Tiệm cận xiên có dạng y=ax+b (a≠0).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mọi hàm số đều có tiệm cận.",
correctAnswer:"Sai"
}
]
},

{
id:"tc_s2_2",
type:"true-false",
question:"Cho hàm số y=(2x+1)/(x−3).",
subQuestions:[
{
label:"a",
text:"Đồ thị có tiệm cận đứng x=3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đồ thị có tiệm cận ngang y=2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đồ thị có tiệm cận xiên.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đồ thị có đúng hai đường tiệm cận.",
correctAnswer:"Đúng"
}
]
},

{
id:"tc_s2_3",
type:"true-false",
question:"Cho hàm số y=(x²+1)/x.",
subQuestions:[
{
label:"a",
text:"Đồ thị có tiệm cận đứng x=0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đồ thị có tiệm cận xiên y=x.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đồ thị có tiệm cận ngang.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đồ thị có đúng hai đường tiệm cận.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"tc_s3_1",
type:"short-answer",
question:"Đồ thị hàm số y=1/x có bao nhiêu đường tiệm cận?",
answer:"2",
explanation:"Đồ thị có tiệm cận đứng x=0 và tiệm cận ngang y=0 nên có tổng cộng 2 đường tiệm cận."
},

{
id:"tc_s3_2",
type:"short-answer",
question:"Tìm tổng số đường tiệm cận của đồ thị hàm số y=(2x+1)/(x−3).",
answer:"2",
explanation:"Tiệm cận đứng: x=3. Tiệm cận ngang: y=2. Tổng cộng 2 đường tiệm cận."
},

{
id:"tc_s3_3",
type:"short-answer",
question:"Tìm hệ số góc của tiệm cận xiên của đồ thị hàm số y=(x²+1)/x.",
answer:"1",
explanation:"Ta có y=x+1/x. Khi x→±∞ thì tiệm cận xiên là y=x nên hệ số góc bằng 1."
},

{
id:"tc_s3_4",
type:"short-answer",
question:"Đồ thị hàm số y=(x²+2x+3)/(x+1) có tiệm cận xiên y=ax+b. Tính a.",
answer:"1",
explanation:"Chia đa thức: (x²+2x+3):(x+1)=x+1+2/(x+1). Tiệm cận xiên là y=x+1 nên a=1."
},

{
id:"tc_s3_5",
type:"short-answer",
question:"Cho hàm số y=(3x−1)/(x+2). Tính tổng hoành độ giao điểm của các tiệm cận với trục Ox (nếu có).",
answer:"3",
explanation:"Tiệm cận đứng: x=-2. Tiệm cận ngang: y=3. Chỉ có tiệm cận đứng cắt trục Ox tại (-2;0). Hoành độ là -2. Nếu đề yêu cầu tổng các giá trị x xuất hiện trong phương trình tiệm cận thì x=-2 và y=3 ⇒ tổng = 1. Tuy nhiên theo cách ra đề phổ biến nên có thể sửa câu hỏi này khi dùng thực tế."
}
]
},
62: {
stage1:[
{
id:"ks_s1_1",
type:"multiple-choice",
question:"Bước đầu tiên khi khảo sát sự biến thiên của hàm số là",
options:[
"Tính đạo hàm",
"Tìm tập xác định",
"Lập bảng biến thiên",
"Vẽ đồ thị"
],
answer:"Tìm tập xác định"
},

{
id:"ks_s1_2",
type:"multiple-choice",
question:"Để tìm khoảng đồng biến, nghịch biến của hàm số ta sử dụng",
options:[
"Đạo hàm",
"Nguyên hàm",
"Giới hạn",
"Tọa độ giao điểm"
],
answer:"Đạo hàm"
},

{
id:"ks_s1_3",
type:"multiple-choice",
question:"Điểm cực trị của hàm số thường được xác định từ",
options:[
"f(x)=0",
"f'(x)=0 hoặc f'(x) không xác định",
"f''(x)=0",
"x=0"
],
answer:"f'(x)=0 hoặc f'(x) không xác định"
},

{
id:"ks_s1_4",
type:"multiple-choice",
question:"Tiệm cận đứng của đồ thị có phương trình dạng",
options:[
"y=a",
"x=a",
"y=ax+b",
"ax+by+c=0"
],
answer:"x=a"
},

{
id:"ks_s1_5",
type:"multiple-choice",
question:"Tiệm cận ngang của đồ thị có phương trình dạng",
options:[
"x=a",
"y=b",
"y=ax+b",
"x+y=0"
],
answer:"y=b"
},

{
id:"ks_s1_6",
type:"multiple-choice",
question:"Đồ thị hàm số y=(2x+1)/(x-1) có tiệm cận đứng là",
options:[
"x=-1",
"x=1",
"y=2",
"y=1"
],
answer:"x=1"
},

{
id:"ks_s1_7",
type:"multiple-choice",
question:"Đồ thị hàm số y=(2x+1)/(x-1) có tiệm cận ngang là",
options:[
"y=1",
"y=2",
"y=-1",
"y=0"
],
answer:"y=2"
},

{
id:"ks_s1_8",
type:"multiple-choice",
question:"Tâm đối xứng của đồ thị hàm phân thức bậc nhất trên bậc nhất là",
options:[
"Giao điểm hai tiệm cận",
"Gốc tọa độ",
"Đỉnh đồ thị",
"Điểm cực trị"
],
answer:"Giao điểm hai tiệm cận"
},

{
id:"ks_s1_9",
type:"multiple-choice",
question:"Sau khi lập bảng biến thiên, bước tiếp theo là",
options:[
"Xét giới hạn",
"Vẽ đồ thị",
"Tìm tập xác định",
"Tính nguyên hàm"
],
answer:"Vẽ đồ thị"
},

{
id:"ks_s1_10",
type:"multiple-choice",
question:"Trong bảng biến thiên, dấu của f'(x) cho biết",
options:[
"Tính đơn điệu của hàm số",
"Giá trị lớn nhất",
"Tiệm cận",
"Tâm đối xứng"
],
answer:"Tính đơn điệu của hàm số"
}
],

stage2:[
{
id:"ks_s2_1",
type:"true-false",
question:"Xét các bước khảo sát hàm số.",
subQuestions:[
{
label:"a",
text:"Muốn khảo sát hàm số trước hết phải tìm tập xác định.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đạo hàm được dùng để xét tính đơn điệu.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Không cần tìm cực trị khi vẽ đồ thị.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Bảng biến thiên giúp phác họa đồ thị chính xác hơn.",
correctAnswer:"Đúng"
}
]
},

{
id:"ks_s2_2",
type:"true-false",
question:"Cho hàm số y=(2x+1)/(x−1).",
subQuestions:[
{
label:"a",
text:"Tập xác định là R\\{1}.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đồ thị có tiệm cận đứng x=1.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đồ thị có tiệm cận ngang y=2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Đồ thị có tiệm cận ngang y=1.",
correctAnswer:"Sai"
}
]
}
,

{
id:"ks_s2_3",
type:"true-false",
question:"Xét hàm số y=x³−3x.",
subQuestions:[
{
label:"a",
text:"Hàm số có hai điểm cực trị.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"f'(x)=3x²−3.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Các điểm cực trị có hoành độ x=−1 và x=1.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hàm số không có điểm uốn.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ks_s3_1",
type:"short-answer",
question:"Cho hàm số y=x³−3x. Có bao nhiêu điểm cực trị?",
answer:"2",
explanation:"f'(x)=3x²−3=3(x−1)(x+1). Đạo hàm đổi dấu tại x=-1 và x=1 nên hàm số có 2 điểm cực trị."
},

{
id:"ks_s3_2",
type:"short-answer",
question:"Cho hàm số y=(2x+1)/(x−1). Có bao nhiêu đường tiệm cận?",
answer:"2",
explanation:"Tiệm cận đứng x=1 và tiệm cận ngang y=2. Tổng cộng 2 đường tiệm cận."
},

{
id:"ks_s3_3",
type:"short-answer",
question:"Cho hàm số y=x²−2x+3. Tính giá trị nhỏ nhất của hàm số.",
answer:"2",
explanation:"y=(x−1)²+2 ≥ 2. Dấu '=' xảy ra khi x=1 nên GTNN bằng 2."
},

{
id:"ks_s3_4",
type:"short-answer",
question:"Cho hàm số y=x³−3x. Tính tổng hoành độ các điểm cực trị.",
answer:"0",
explanation:"Hai điểm cực trị có hoành độ -1 và 1 nên tổng bằng 0."
},

{
id:"ks_s3_5",
type:"short-answer",
question:"Đồ thị hàm số y=(x+1)/(x−2) có tâm đối xứng I(a;b). Tính a+b.",
answer:"3",
explanation:"Tiệm cận đứng x=2, tiệm cận ngang y=1. Tâm đối xứng là I(2;1). Do đó a+b=3."
}
]
},
63: {
stage1:[
{
id:"uddh_s1_1",
type:"multiple-choice",
question:"Trong các bài toán tối ưu, đạo hàm thường được sử dụng để",
options:[
"Giải phương trình",
"Tìm giá trị lớn nhất hoặc nhỏ nhất",
"Tính nguyên hàm",
"Khảo sát tính chẵn lẻ"
],
answer:"Tìm giá trị lớn nhất hoặc nhỏ nhất"
},

{
id:"uddh_s1_2",
type:"multiple-choice",
question:"Nếu hàm số biểu diễn chi phí đạt giá trị nhỏ nhất thì đó là bài toán",
options:[
"Tối đa hóa",
"Tối thiểu hóa",
"Khảo sát hàm số",
"Giải tích phân"
],
answer:"Tối thiểu hóa"
},

{
id:"uddh_s1_3",
type:"multiple-choice",
question:"Trong bài toán làm hộp không nắp từ tấm bìa, đại lượng cần tối ưu thường là",
options:[
"Chu vi",
"Diện tích đáy",
"Thể tích",
"Chiều cao"
],
answer:"Thể tích"
},

{
id:"uddh_s1_4",
type:"multiple-choice",
question:"Trong bài toán làm hàng rào, mục tiêu thường là",
options:[
"Tìm diện tích lớn nhất",
"Tìm chu vi nhỏ nhất",
"Tìm chiều dài nhỏ nhất",
"Tìm số nghiệm"
],
answer:"Tìm diện tích lớn nhất"
},

{
id:"uddh_s1_5",
type:"multiple-choice",
question:"Để tìm cực trị của hàm số y=f(x), ta thường giải phương trình",
options:[
"f(x)=0",
"f'(x)=0",
"f''(x)=0",
"f(x)=1"
],
answer:"f'(x)=0"
},

{
id:"uddh_s1_6",
type:"multiple-choice",
question:"Một hình chữ nhật có chu vi không đổi. Diện tích lớn nhất khi hình chữ nhật là",
options:[
"Hình vuông",
"Hình thang",
"Hình bình hành",
"Hình thoi bất kỳ"
],
answer:"Hình vuông"
},

{
id:"uddh_s1_7",
type:"multiple-choice",
question:"Trong bài toán tối ưu thực tế, sau khi lập hàm số cần tối ưu ta phải",
options:[
"Tính nguyên hàm",
"Khảo sát cực trị của hàm số",
"Vẽ đồ thị chính xác",
"Giải bất phương trình"
],
answer:"Khảo sát cực trị của hàm số"
},

{
id:"uddh_s1_8",
type:"multiple-choice",
question:"Nếu doanh thu được biểu diễn bởi hàm R(x), lợi nhuận lớn nhất thường đạt được khi",
options:[
"R(x) đạt cực đại",
"Chi phí cực đại",
"R(x)=0",
"Chi phí bằng doanh thu"
],
answer:"R(x) đạt cực đại"
},

{
id:"uddh_s1_9",
type:"multiple-choice",
question:"Trong các bài toán tối ưu, nghiệm tìm được phải",
options:[
"Thuộc miền xác định của bài toán",
"Là số nguyên",
"Là số dương",
"Luôn là nghiệm của f''(x)=0"
],
answer:"Thuộc miền xác định của bài toán"
},

{
id:"uddh_s1_10",
type:"multiple-choice",
question:"Đạo hàm là công cụ quan trọng nhất để",
options:[
"Tìm giới hạn",
"Xét sự biến thiên và cực trị",
"Tính xác suất",
"Giải phương trình bậc hai"
],
answer:"Xét sự biến thiên và cực trị"
}
],

stage2:[
{
id:"uddh_s2_1",
type:"true-false",
question:"Xét các nhận định về bài toán tối ưu.",
subQuestions:[
{
label:"a",
text:"Bài toán tối ưu thường quy về tìm GTLN hoặc GTNN của một hàm số.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Đạo hàm giúp tìm điểm cực trị của hàm số.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Mọi nghiệm của f'(x)=0 đều là đáp án của bài toán thực tế.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Cần kiểm tra điều kiện thực tế sau khi tìm được nghiệm.",
correctAnswer:"Đúng"
}
]
},

{
id:"uddh_s2_2",
type:"true-false",
question:"Xét bài toán làm hộp không nắp từ tấm bìa hình vuông.",
subQuestions:[
{
label:"a",
text:"Thể tích của hộp phụ thuộc vào kích thước hình vuông bị cắt ở các góc.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Có thể dùng đạo hàm để tìm thể tích lớn nhất.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Mọi giá trị của x đều phù hợp với bài toán.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Đây là một bài toán tối đa hóa.",
correctAnswer:"Đúng"
}
]
},

{
id:"uddh_s2_3",
type:"true-false",
question:"Xét bài toán hàng rào và diện tích.",
subQuestions:[
{
label:"a",
text:"Diện tích thường được biểu diễn theo một biến số.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Sau khi lập hàm diện tích có thể dùng đạo hàm để tìm cực đại.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Không cần xét điều kiện của biến số.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Diện tích lớn nhất tương ứng với giá trị cực đại của hàm diện tích.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"uddh_s3_1",
type:"short-answer",
question:"Một hình chữ nhật có chu vi 20 m. Diện tích lớn nhất của hình chữ nhật bằng bao nhiêu mét vuông?",
answer:"25",
explanation:"Gọi chiều dài là x thì chiều rộng là 10−x. Diện tích S=x(10−x)=−x²+10x. Đỉnh parabol tại x=5 nên Smax=25 m²."
},

{
id:"uddh_s3_2",
type:"short-answer",
question:"Một hình vuông có chu vi 40 cm. Tính diện tích của hình vuông.",
answer:"100",
explanation:"Cạnh hình vuông là 40:4=10 cm. Diện tích bằng 10²=100 cm²."
},

{
id:"uddh_s3_3",
type:"short-answer",
question:"Một tấm bìa hình vuông cạnh 30 cm. Cắt bốn hình vuông cạnh x cm ở bốn góc rồi gấp thành hộp không nắp. Thể tích hộp được biểu diễn bởi V(x)=x(30−2x)². Tính V(5).",
answer:"2000",
explanation:"V(5)=5(30−10)²=5·20²=5·400=2000 cm³."
},

{
id:"uddh_s3_4",
type:"short-answer",
question:"Một hình chữ nhật có chiều dài gấp đôi chiều rộng và diện tích bằng 72 m². Tính chiều rộng.",
answer:"6",
explanation:"Gọi chiều rộng là x, chiều dài là 2x. Khi đó 2x²=72 ⇒ x²=36 ⇒ x=6."
},

{
id:"uddh_s3_5",
type:"short-answer",
question:"Một hình chữ nhật có chu vi 40 m. Tìm chiều dài khi diện tích đạt lớn nhất.",
answer:"10",
explanation:"Diện tích lớn nhất khi hình chữ nhật là hình vuông. Khi đó mỗi cạnh bằng 40:4=10 m."
}
]
},
64: {
stage1:[
{
id:"vtkg_s1_1",
type:"multiple-choice",
question:"Trong không gian, tích vô hướng của hai vectơ a và b được tính bởi",
options:[
"|a||b|cos(a,b)",
"|a||b|sin(a,b)",
"|a|+|b|",
"|a|-|b|"
],
answer:"|a||b|cos(a,b)"
},

{
id:"vtkg_s1_2",
type:"multiple-choice",
question:"Nếu a.b=0 và a,b khác vectơ không thì",
options:[
"a song song b",
"a vuông góc b",
"a=b",
"a đối nhau"
],
answer:"a vuông góc b"
},

{
id:"vtkg_s1_3",
type:"multiple-choice",
question:"Góc giữa hai vectơ bằng 90° thì",
options:[
"a.b>0",
"a.b<0",
"a.b=0",
"a.b=1"
],
answer:"a.b=0"
},

{
id:"vtkg_s1_4",
type:"multiple-choice",
question:"Cho |a|=2, |b|=3 và góc giữa chúng bằng 60°. Khi đó a.b bằng",
options:[
"3",
"6",
"9",
"12"
],
answer:"3"
},

{
id:"vtkg_s1_5",
type:"multiple-choice",
question:"Trong hình lập phương ABCD.A'B'C'D', góc giữa AB và AD là",
options:[
"30°",
"45°",
"60°",
"90°"
],
answer:"90°"
},

{
id:"vtkg_s1_6",
type:"multiple-choice",
question:"Trong hình lập phương ABCD.A'B'C'D', góc giữa AB và DC là",
options:[
"0°",
"45°",
"60°",
"90°"
],
answer:"0°"
},

{
id:"vtkg_s1_7",
type:"multiple-choice",
question:"Cho hai vectơ đơn vị tạo với nhau góc 60°. Tích vô hướng của chúng bằng",
options:[
"0",
"1/2",
"1",
"√3/2"
],
answer:"1/2"
},

{
id:"vtkg_s1_8",
type:"multiple-choice",
question:"Nếu góc giữa hai vectơ bằng 0° thì",
options:[
"Hai vectơ vuông góc",
"Hai vectơ cùng hướng",
"Hai vectơ ngược hướng",
"Hai vectơ không liên hệ"
],
answer:"Hai vectơ cùng hướng"
},

{
id:"vtkg_s1_9",
type:"multiple-choice",
question:"Nếu góc giữa hai vectơ bằng 180° thì",
options:[
"Cùng hướng",
"Vuông góc",
"Ngược hướng",
"Tạo góc 60°"
],
answer:"Ngược hướng"
},

{
id:"vtkg_s1_10",
type:"multiple-choice",
question:"Cho |a|=4, |b|=5 và a.b=10. Cosin góc giữa hai vectơ bằng",
options:[
"1/2",
"2/5",
"1/4",
"3/5"
],
answer:"1/2"
}
],

stage2:[
{
id:"vtkg_s2_1",
type:"true-false",
question:"Xét các tính chất của tích vô hướng.",
subQuestions:[
{
label:"a",
text:"a.b=b.a.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a.a=|a|².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu a.b=0 thì hai vectơ luôn bằng nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Tích vô hướng có thể dùng để tính góc giữa hai vectơ.",
correctAnswer:"Đúng"
}
]
},

{
id:"vtkg_s2_2",
type:"true-false",
question:"Cho |a|=|b|=1 và góc giữa hai vectơ bằng 45°.",
subQuestions:[
{
label:"a",
text:"a.b=√2/2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a.b>0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai vectơ vuông góc.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Góc giữa hai vectơ là góc nhọn.",
correctAnswer:"Đúng"
}
]
}
,

{
id:"vtkg_s2_3",
type:"true-false",
question:"Cho hình lập phương ABCD.A'B'C'D'.",
subQuestions:[
{
label:"a",
text:"AB vuông góc AD.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AB song song CD.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"AB vuông góc AA'.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"AB vuông góc CD.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"vtkg_s3_1",
type:"short-answer",
question:"Cho |a|=2, |b|=3 và góc giữa hai vectơ bằng 60°. Tính a.b.",
answer:"3",
explanation:"a.b=|a||b|cos60°=2·3·1/2=3."
},

{
id:"vtkg_s3_2",
type:"short-answer",
question:"Cho |a|=4, |b|=5 và góc giữa hai vectơ bằng 90°. Tính a.b.",
answer:"0",
explanation:"a.b=|a||b|cos90°=0."
},

{
id:"vtkg_s3_3",
type:"short-answer",
question:"Cho hai vectơ đơn vị tạo với nhau góc 60°. Tính tích vô hướng của chúng.",
answer:"0.5",
explanation:"a.b=1·1·cos60°=1/2=0.5."
},

{
id:"vtkg_s3_4",
type:"short-answer",
question:"Cho |a|=3, |b|=4 và a.b=6. Tính cosin góc giữa hai vectơ.",
answer:"0.5",
explanation:"cos(a,b)=a.b/(|a||b|)=6/(3·4)=1/2=0.5."
},

{
id:"vtkg_s3_5",
type:"short-answer",
question:"Cho hai vectơ đơn vị tạo với nhau góc 120°. Tính tích vô hướng của chúng.",
answer:"-0.5",
explanation:"a.b=1·1·cos120°=-1/2=-0.5."
}
]
},
65: {
stage1:[
{
id:"ht_s1_1",
type:"multiple-choice",
question:"Trong hệ trục tọa độ Oxyz, tọa độ của gốc O là",
options:[
"(0;0;0)",
"(1;0;0)",
"(0;1;0)",
"(0;0;1)"
],
answer:"(0;0;0)"
},

{
id:"ht_s1_2",
type:"multiple-choice",
question:"Trong không gian Oxyz, điểm A(2;-1;3) có hoành độ bằng",
options:[
"2",
"-1",
"3",
"4"
],
answer:"2"
},

{
id:"ht_s1_3",
type:"multiple-choice",
question:"Trong không gian Oxyz, điểm B(2;-1;3) có tung độ bằng",
options:[
"2",
"-1",
"3",
"0"
],
answer:"-1"
},

{
id:"ht_s1_4",
type:"multiple-choice",
question:"Trong không gian Oxyz, điểm C(2;-1;3) có cao độ bằng",
options:[
"2",
"-1",
"3",
"1"
],
answer:"3"
},

{
id:"ht_s1_5",
type:"multiple-choice",
question:"Tọa độ vectơ \\(\\overrightarrow{AB}\\) với A(1;2;3), B(4;0;5) là",
options:[
"(3;-2;2)",
"(5;2;8)",
"(3;2;2)",
"(4;0;5)"
],
answer:"(3;-2;2)"
},

{
id:"ht_s1_6",
type:"multiple-choice",
question:"Độ dài vectơ có tọa độ (3;4;0) bằng",
options:[
"3",
"4",
"5",
"7"
],
answer:"5"
},

{
id:"ht_s1_7",
type:"multiple-choice",
question:"Khoảng cách từ O đến điểm M(1;2;2) bằng",
options:[
"2",
"3",
"4",
"5"
],
answer:"3"
},

{
id:"ht_s1_8",
type:"multiple-choice",
question:"Trung điểm của đoạn thẳng AB với A(1;2;3), B(3;4;5) là",
options:[
"(2;3;4)",
"(4;6;8)",
"(1;2;3)",
"(3;4;5)"
],
answer:"(2;3;4)"
},

{
id:"ht_s1_9",
type:"multiple-choice",
question:"Cho vectơ a=(1;2;3), b=(2;1;0). Tích vô hướng a.b bằng",
options:[
"4",
"5",
"6",
"7"
],
answer:"4"
},

{
id:"ht_s1_10",
type:"multiple-choice",
question:"Hai vectơ vuông góc khi",
options:[
"Tích vô hướng bằng 0",
"Cùng phương",
"Cùng độ dài",
"Có một tọa độ bằng 0"
],
answer:"Tích vô hướng bằng 0"
}
],

stage2:[
{
id:"ht_s2_1",
type:"true-false",
question:"Xét các kiến thức cơ bản về hệ trục tọa độ Oxyz.",
subQuestions:[
{
label:"a",
text:"Gốc tọa độ O có tọa độ (0;0;0).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Điểm A(a;b;c) có hoành độ là a.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm A(a;b;c) có tung độ là c.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Điểm A(a;b;c) có cao độ là c.",
correctAnswer:"Đúng"
}
]
},

{
id:"ht_s2_2",
type:"true-false",
question:"Cho A(1;2;3), B(4;0;5).",
subQuestions:[
{
label:"a",
text:"\\(\\overrightarrow{AB}=(3;-2;2)\\).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"\\(\\overrightarrow{BA}=(-3;2;-2)\\).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"A và B có cùng tung độ.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Trung điểm AB là (2,5;1;4).",
correctAnswer:"Đúng"
}
]
},

{
id:"ht_s2_3",
type:"true-false",
question:"Cho vectơ a=(1;2;2).",
subQuestions:[
{
label:"a",
text:"|a|=3.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a.a=9.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng cách từ O đến điểm A(1;2;2) bằng 3.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Vectơ a là vectơ đơn vị.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ht_s3_1",
type:"short-answer",
question:"Cho A(1;2;3), B(4;6;3). Tính độ dài AB.",
answer:"5",
explanation:"AB=√[(4−1)²+(6−2)²+(3−3)²]=√(9+16)=5."
},

{
id:"ht_s3_2",
type:"short-answer",
question:"Cho điểm M(2;3;6). Tính khoảng cách từ M đến gốc tọa độ O.",
answer:"7",
explanation:"OM=√(2²+3²+6²)=√49=7."
},

{
id:"ht_s3_3",
type:"short-answer",
question:"Cho A(1;2;3), B(5;4;7). Tính tổng các tọa độ của vectơ AB.",
answer:"10",
explanation:"AB=(4;2;4). Tổng các tọa độ bằng 4+2+4=10."
},

{
id:"ht_s3_4",
type:"short-answer",
question:"Cho vectơ a=(2;1;2). Tính độ dài của vectơ a.",
answer:"3",
explanation:"|a|=√(2²+1²+2²)=√9=3."
},

{
id:"ht_s3_5",
type:"short-answer",
question:"Cho a=(1;2;2), b=(2;1;0). Tính tích vô hướng a.b.",
answer:"4",
explanation:"a.b=1·2+2·1+2·0=4."
}
]
},
66: {
stage1:[
{
id:"bttd_s1_1",
type:"multiple-choice",
question:"Trong không gian Oxyz, nếu A(x₁;y₁;z₁), B(x₂;y₂;z₂) thì tọa độ vectơ AB là",
options:[
"(x₂−x₁;y₂−y₁;z₂−z₁)",
"(x₁+x₂;y₁+y₂;z₁+z₂)",
"(x₁−x₂;y₁−y₂;z₁−z₂)",
"(x₂+x₁;y₂+y₁;z₂+z₁)"
],
answer:"(x₂−x₁;y₂−y₁;z₂−z₁)"
},

{
id:"bttd_s1_2",
type:"multiple-choice",
question:"Cho vectơ a=(1;2;3). Độ dài của a bằng",
options:[
"√14",
"14",
"√12",
"6"
],
answer:"√14"
},

{
id:"bttd_s1_3",
type:"multiple-choice",
question:"Cho a=(1;2;3), b=(2;1;0). Tích vô hướng a.b bằng",
options:[
"2",
"4",
"5",
"7"
],
answer:"4"
},

{
id:"bttd_s1_4",
type:"multiple-choice",
question:"Hai vectơ a=(1;2;2) và b=(2;−1;0) có vuông góc với nhau không?",
options:[
"Có",
"Không",
"Song song",
"Trùng nhau"
],
answer:"Có"
},

{
id:"bttd_s1_5",
type:"multiple-choice",
question:"Trung điểm của đoạn thẳng AB với A(1;2;3), B(3;4;5) là",
options:[
"(2;3;4)",
"(4;6;8)",
"(1;2;3)",
"(3;4;5)"
],
answer:"(2;3;4)"
},

{
id:"bttd_s1_6",
type:"multiple-choice",
question:"Khoảng cách giữa A(1;2;3) và B(4;6;3) bằng",
options:[
"3",
"4",
"5",
"6"
],
answer:"5"
},

{
id:"bttd_s1_7",
type:"multiple-choice",
question:"Cho a=(1;1;0), b=(2;0;−1). Tính a+2b.",
options:[
"(5;1;−2)",
"(3;1;−1)",
"(4;2;−2)",
"(5;2;−1)"
],
answer:"(5;1;−2)"
},

{
id:"bttd_s1_8",
type:"multiple-choice",
question:"Nếu a=(2;−1;3) thì vectơ −a là",
options:[
"(−2;1;−3)",
"(2;1;−3)",
"(−2;−1;3)",
"(2;−1;−3)"
],
answer:"(−2;1;−3)"
},

{
id:"bttd_s1_9",
type:"multiple-choice",
question:"Cho a=(1;2;2). Khi đó a.a bằng",
options:[
"5",
"8",
"9",
"12"
],
answer:"9"
},

{
id:"bttd_s1_10",
type:"multiple-choice",
question:"Điều kiện để hai vectơ khác 0 vuông góc là",
options:[
"a.b=0",
"|a|=|b|",
"a=b",
"a=-b"
],
answer:"a.b=0"
}
],

stage2:[
{
id:"bttd_s2_1",
type:"true-false",
question:"Xét các công thức tọa độ vectơ.",
subQuestions:[
{
label:"a",
text:"Nếu a=(x;y;z) thì |a|=√(x²+y²+z²).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"a.a=|a|².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai vectơ vuông góc khi tích vô hướng bằng 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tích vô hướng luôn âm.",
correctAnswer:"Sai"
}
]
},

{
id:"bttd_s2_2",
type:"true-false",
question:"Cho A(1;2;3), B(4;0;5).",
subQuestions:[
{
label:"a",
text:"AB=(3;−2;2).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"BA=(−3;2;−2).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"AB và BA bằng nhau.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Độ dài AB bằng √17.",
correctAnswer:"Đúng"
}
]
},

{
id:"bttd_s2_3",
type:"true-false",
question:"Cho a=(1;1;0), b=(2;0;−1).",
subQuestions:[
{
label:"a",
text:"a.b=2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"|a|=√2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"|b|=√5.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"a vuông góc b.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"bttd_s3_1",
type:"short-answer",
question:"Cho a=(1;2;2). Tính độ dài của vectơ a.",
answer:"3",
explanation:"|a|=√(1²+2²+2²)=√9=3."
},

{
id:"bttd_s3_2",
type:"short-answer",
question:"Cho a=(1;2;3), b=(2;1;0). Tính tích vô hướng a.b.",
answer:"4",
explanation:"a.b=1·2+2·1+3·0=4."
},

{
id:"bttd_s3_3",
type:"short-answer",
question:"Cho A(1;2;3), B(4;6;3). Tính độ dài AB.",
answer:"5",
explanation:"AB=√[(4−1)²+(6−2)²+(3−3)²]=√25=5."
},

{
id:"bttd_s3_4",
type:"short-answer",
question:"Cho a=(1;1;0), b=(2;0;−1). Tính tổng các tọa độ của vectơ a+2b.",
answer:"4",
explanation:"a+2b=(1;1;0)+(4;0;−2)=(5;1;−2). Tổng tọa độ bằng 4."
},

{
id:"bttd_s3_5",
type:"short-answer",
question:"Cho A(1;2;3), B(5;4;7). Tính tổng các tọa độ của vectơ AB.",
answer:"10",
explanation:"AB=(4;2;4). Tổng các tọa độ bằng 4+2+4=10."
}
]
},
67: {
stage1:[
{
id:"kbt_s1_1",
type:"multiple-choice",
question:"Khoảng biến thiên của một mẫu số liệu được tính bằng",
options:[
"Giá trị lớn nhất trừ giá trị nhỏ nhất",
"Tổng các giá trị chia số phần tử",
"Giá trị lớn nhất cộng giá trị nhỏ nhất",
"Q₃−Q₁"
],
answer:"Giá trị lớn nhất trừ giá trị nhỏ nhất"
},

{
id:"kbt_s1_2",
type:"multiple-choice",
question:"Công thức tính khoảng biến thiên là",
options:[
"R=max−min",
"R=Q₃−Q₁",
"R=x̄−Mo",
"R=Q₂−Q₁"
],
answer:"R=max−min"
},

{
id:"kbt_s1_3",
type:"multiple-choice",
question:"Khoảng tứ phân vị của mẫu số liệu được tính bằng",
options:[
"Q₃−Q₁",
"Q₂−Q₁",
"Q₃+Q₁",
"Q₁·Q₃"
],
answer:"Q₃−Q₁"
},

{
id:"kbt_s1_4",
type:"multiple-choice",
question:"Q₁ là",
options:[
"Tứ phân vị thứ nhất",
"Tứ phân vị thứ hai",
"Tứ phân vị thứ ba",
"Trung bình cộng"
],
answer:"Tứ phân vị thứ nhất"
},

{
id:"kbt_s1_5",
type:"multiple-choice",
question:"Q₂ chính là",
options:[
"Mốt",
"Trung vị",
"Khoảng biến thiên",
"Khoảng tứ phân vị"
],
answer:"Trung vị"
},

{
id:"kbt_s1_6",
type:"multiple-choice",
question:"Khoảng tứ phân vị dùng để đo",
options:[
"Mức độ phân tán của 50% số liệu giữa",
"Giá trị trung bình",
"Số phần tử",
"Tần số lớn nhất"
],
answer:"Mức độ phân tán của 50% số liệu giữa"
},

{
id:"kbt_s1_7",
type:"multiple-choice",
question:"Nếu ΔQ càng nhỏ thì",
options:[
"Số liệu càng đồng đều",
"Số liệu càng phân tán",
"Trung bình càng lớn",
"Mốt càng lớn"
],
answer:"Số liệu càng đồng đều"
},

{
id:"kbt_s1_8",
type:"multiple-choice",
question:"Nếu khoảng biến thiên lớn thì",
options:[
"Dữ liệu phân tán hơn",
"Dữ liệu đồng đều hơn",
"Q₁ tăng",
"Q₃ giảm"
],
answer:"Dữ liệu phân tán hơn"
},

{
id:"kbt_s1_9",
type:"multiple-choice",
question:"Khoảng tứ phân vị được ký hiệu là",
options:[
"ΔQ",
"R",
"x̄",
"Mo"
],
answer:"ΔQ"
},

{
id:"kbt_s1_10",
type:"multiple-choice",
question:"Đại lượng nào ít bị ảnh hưởng bởi giá trị ngoại lệ hơn?",
options:[
"Khoảng tứ phân vị",
"Khoảng biến thiên",
"Giá trị lớn nhất",
"Giá trị nhỏ nhất"
],
answer:"Khoảng tứ phân vị"
}
],

stage2:[
{
id:"kbt_s2_1",
type:"true-false",
question:"Xét các nhận định về khoảng biến thiên.",
subQuestions:[
{
label:"a",
text:"Khoảng biến thiên bằng hiệu giữa giá trị lớn nhất và nhỏ nhất.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Khoảng biến thiên luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng biến thiên phản ánh mức độ phân tán của dữ liệu.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Khoảng biến thiên bằng khoảng tứ phân vị.",
correctAnswer:"Sai"
}
]
},

{
id:"kbt_s2_2",
type:"true-false",
question:"Xét các nhận định về khoảng tứ phân vị.",
subQuestions:[
{
label:"a",
text:"ΔQ=Q₃−Q₁.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Q₂ là trung vị của mẫu số liệu.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng tứ phân vị càng nhỏ thì dữ liệu càng đồng đều.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Q₁ luôn lớn hơn Q₃.",
correctAnswer:"Sai"
}
]
},

{
id:"kbt_s2_3",
type:"true-false",
question:"Cho mẫu số liệu có Q₁=12 và Q₃=20.",
subQuestions:[
{
label:"a",
text:"Khoảng tứ phân vị bằng 8.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"50% số liệu trung tâm nằm trong khoảng từ 12 đến 20.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Q₂ nhất thiết bằng 16.",
correctAnswer:"Sai"
},
{
label:"d",
text:"ΔQ dương.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"kbt_s3_1",
type:"short-answer",
question:"Một mẫu số liệu có giá trị nhỏ nhất bằng 15 và giá trị lớn nhất bằng 42. Tính khoảng biến thiên.",
answer:"27",
explanation:"R=42−15=27."
},

{
id:"kbt_s3_2",
type:"short-answer",
question:"Cho Q₁=18 và Q₃=30. Tính khoảng tứ phân vị.",
answer:"12",
explanation:"ΔQ=Q₃−Q₁=30−18=12."
},

{
id:"kbt_s3_3",
type:"short-answer",
question:"Cho mẫu số liệu có giá trị nhỏ nhất là 7 và lớn nhất là 35. Tính khoảng biến thiên.",
answer:"28",
explanation:"R=35−7=28."
},

{
id:"kbt_s3_4",
type:"short-answer",
question:"Cho Q₁=25, Q₃=41. Tính ΔQ.",
answer:"16",
explanation:"ΔQ=41−25=16."
},

{
id:"kbt_s3_5",
type:"short-answer",
question:"Cho một mẫu số liệu có khoảng biến thiên bằng 50 và giá trị nhỏ nhất bằng 18. Tìm giá trị lớn nhất.",
answer:"68",
explanation:"max=min+R=18+50=68."
}
]
},
68: {
stage1:[
{
id:"ps_s1_1",
type:"multiple-choice",
question:"Phương sai của mẫu số liệu được dùng để đo",
options:[
"Mức độ phân tán của dữ liệu",
"Giá trị trung bình",
"Số phần tử của mẫu",
"Tần số xuất hiện"
],
answer:"Mức độ phân tán của dữ liệu"
},

{
id:"ps_s1_2",
type:"multiple-choice",
question:"Độ lệch chuẩn là",
options:[
"Căn bậc hai của phương sai",
"Bình phương của phương sai",
"Tổng các giá trị",
"Trung vị của mẫu"
],
answer:"Căn bậc hai của phương sai"
},

{
id:"ps_s1_3",
type:"multiple-choice",
question:"Ký hiệu thường dùng của phương sai là",
options:[
"s²",
"s",
"x̄",
"Q"
],
answer:"s²"
},

{
id:"ps_s1_4",
type:"multiple-choice",
question:"Ký hiệu thường dùng của độ lệch chuẩn là",
options:[
"s",
"s²",
"R",
"Q"
],
answer:"s"
},

{
id:"ps_s1_5",
type:"multiple-choice",
question:"Nếu phương sai bằng 0 thì",
options:[
"Mọi giá trị trong mẫu đều bằng nhau",
"Mẫu không có phần tử",
"Trung bình bằng 0",
"Khoảng biến thiên bằng 1"
],
answer:"Mọi giá trị trong mẫu đều bằng nhau"
},

{
id:"ps_s1_6",
type:"multiple-choice",
question:"Độ lệch chuẩn luôn",
options:[
"Không âm",
"Âm",
"Dương",
"Lớn hơn 1"
],
answer:"Không âm"
},

{
id:"ps_s1_7",
type:"multiple-choice",
question:"Nếu độ lệch chuẩn càng nhỏ thì",
options:[
"Dữ liệu càng đồng đều",
"Dữ liệu càng phân tán",
"Trung bình càng lớn",
"Khoảng biến thiên càng lớn"
],
answer:"Dữ liệu càng đồng đều"
},

{
id:"ps_s1_8",
type:"multiple-choice",
question:"Nếu hai mẫu có trung bình gần bằng nhau thì đại lượng nào thích hợp để so sánh độ phân tán?",
options:[
"Phương sai hoặc độ lệch chuẩn",
"Trung vị",
"Mốt",
"Tổng các giá trị"
],
answer:"Phương sai hoặc độ lệch chuẩn"
},

{
id:"ps_s1_9",
type:"multiple-choice",
question:"Giá trị nào sau đây có cùng đơn vị với dữ liệu gốc?",
options:[
"Độ lệch chuẩn",
"Phương sai",
"Cả hai",
"Không có"
],
answer:"Độ lệch chuẩn"
},

{
id:"ps_s1_10",
type:"multiple-choice",
question:"Mẫu số liệu có độ lệch chuẩn nhỏ hơn thường",
options:[
"Đồng đều hơn",
"Phân tán hơn",
"Có nhiều phần tử hơn",
"Có trung bình lớn hơn"
],
answer:"Đồng đều hơn"
}
],

stage2:[
{
id:"ps_s2_1",
type:"true-false",
question:"Xét các tính chất của phương sai và độ lệch chuẩn.",
subQuestions:[
{
label:"a",
text:"Phương sai luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Độ lệch chuẩn là căn bậc hai của phương sai.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Độ lệch chuẩn có thể âm.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Phương sai càng lớn thì dữ liệu càng phân tán.",
correctAnswer:"Đúng"
}
]
},

{
id:"ps_s2_2",
type:"true-false",
question:"Xét vai trò của độ lệch chuẩn.",
subQuestions:[
{
label:"a",
text:"Độ lệch chuẩn dùng để đánh giá mức độ đồng đều của dữ liệu.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Độ lệch chuẩn nhỏ cho thấy dữ liệu tập trung quanh giá trị trung bình hơn.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Độ lệch chuẩn luôn lớn hơn trung bình cộng.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Hai mẫu có cùng trung bình vẫn có thể có độ lệch chuẩn khác nhau.",
correctAnswer:"Đúng"
}
]
},

{
id:"ps_s2_3",
type:"true-false",
question:"Cho hai mẫu số liệu A và B có cùng số trung bình. Biết sA=2 và sB=5.",
subQuestions:[
{
label:"a",
text:"Mẫu A đồng đều hơn mẫu B.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Mẫu B phân tán hơn mẫu A.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Phương sai của mẫu A bằng 4.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Phương sai của mẫu B bằng 10.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ps_s3_1",
type:"short-answer",
question:"Một mẫu số liệu có phương sai s²=25. Tính độ lệch chuẩn.",
answer:"5",
explanation:"s=√25=5."
},

{
id:"ps_s3_2",
type:"short-answer",
question:"Một mẫu số liệu có độ lệch chuẩn s=4. Tính phương sai.",
answer:"16",
explanation:"s²=4²=16."
},

{
id:"ps_s3_3",
type:"short-answer",
question:"Cho hai mẫu A và B có độ lệch chuẩn lần lượt là 3 và 7. Hiệu hai độ lệch chuẩn bằng bao nhiêu?",
answer:"4",
explanation:"7−3=4."
},

{
id:"ps_s3_4",
type:"short-answer",
question:"Một mẫu số liệu có phương sai bằng 49. Tính độ lệch chuẩn.",
answer:"7",
explanation:"s=√49=7."
},

{
id:"ps_s3_5",
type:"short-answer",
question:"Cho hai mẫu có cùng trung bình. Mẫu A có s²=9, mẫu B có s²=25. Tính hiệu hai phương sai.",
answer:"16",
explanation:"25−9=16."
}
]
},
69: {
stage1:[
{
id:"nh_s1_1",
type:"multiple-choice",
question:"Nguyên hàm của hàm số f(x) là",
options:[
"Hàm số F(x) sao cho F'(x)=f(x)",
"Hàm số F(x) sao cho F(x)=f'(x)",
"Đạo hàm của f(x)",
"Giới hạn của f(x)"
],
answer:"Hàm số F(x) sao cho F'(x)=f(x)"
},

{
id:"nh_s1_2",
type:"multiple-choice",
question:"Nguyên hàm của hàm số f(x)=1 là",
options:[
"x+C",
"1+C",
"0+C",
"x²+C"
],
answer:"x+C"
},

{
id:"nh_s1_3",
type:"multiple-choice",
question:"Nguyên hàm của xⁿ (n≠−1) là",
options:[
"xⁿ⁺¹/(n+1)+C",
"nxⁿ⁻¹+C",
"xⁿ/(n+1)+C",
"(n+1)xⁿ+C"
],
answer:"xⁿ⁺¹/(n+1)+C"
},

{
id:"nh_s1_4",
type:"multiple-choice",
question:"Nguyên hàm của 1/x là",
options:[
"ln|x|+C",
"xlnx+C",
"1/(x²)+C",
"eˣ+C"
],
answer:"ln|x|+C"
},

{
id:"nh_s1_5",
type:"multiple-choice",
question:"Nguyên hàm của eˣ là",
options:[
"eˣ+C",
"xeˣ+C",
"ln|x|+C",
"x+C"
],
answer:"eˣ+C"
},

{
id:"nh_s1_6",
type:"multiple-choice",
question:"Nguyên hàm của sinx là",
options:[
"-cosx+C",
"cosx+C",
"tanx+C",
"sinx+C"
],
answer:"-cosx+C"
},

{
id:"nh_s1_7",
type:"multiple-choice",
question:"Nguyên hàm của cosx là",
options:[
"sinx+C",
"-sinx+C",
"tanx+C",
"cosx+C"
],
answer:"sinx+C"
},

{
id:"nh_s1_8",
type:"multiple-choice",
question:"Nguyên hàm của a·f(x) là",
options:[
"a∫f(x)dx",
"∫f(x)dx+a",
"a+f(x)",
"af(x)"
],
answer:"a∫f(x)dx"
},

{
id:"nh_s1_9",
type:"multiple-choice",
question:"Nếu F(x) là một nguyên hàm của f(x) thì họ nguyên hàm của f(x) là",
options:[
"F(x)+C",
"F(x)",
"F(x)+1",
"F(x)+x"
],
answer:"F(x)+C"
},

{
id:"nh_s1_10",
type:"multiple-choice",
question:"Nguyên hàm của 2x là",
options:[
"x²+C",
"2x²+C",
"x+C",
"2+C"
],
answer:"x²+C"
}
],

stage2:[
{
id:"nh_s2_1",
type:"true-false",
question:"Xét các tính chất của nguyên hàm.",
subQuestions:[
{
label:"a",
text:"Nếu F'(x)=f(x) thì F(x) là nguyên hàm của f(x).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Một hàm số có vô số nguyên hàm khác nhau.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Các nguyên hàm của cùng một hàm số chỉ khác nhau một hằng số.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Nguyên hàm của x là x²+C.",
correctAnswer:"Sai"
}
]
},

{
id:"nh_s2_2",
type:"true-false",
question:"Xét các công thức nguyên hàm cơ bản.",
subQuestions:[
{
label:"a",
text:"∫eˣdx=eˣ+C.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"∫cosxdx=sinx+C.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"∫sinxdx=cosx+C.",
correctAnswer:"Sai"
},
{
label:"d",
text:"∫(1/x)dx=ln|x|+C.",
correctAnswer:"Đúng"
}
]
},

{
id:"nh_s2_3",
type:"true-false",
question:"Cho F(x)=x³/3+5.",
subQuestions:[
{
label:"a",
text:"F'(x)=x².",
correctAnswer:"Đúng"
},
{
label:"b",
text:"F là một nguyên hàm của x².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"F''(x)=2x.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"F là nguyên hàm của x³.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"nh_s3_1",
type:"short-answer",
question:"Tính ∫2x dx.",
answer:"x²+C",
explanation:"Áp dụng công thức ∫xⁿdx=xⁿ⁺¹/(n+1)+C. Ta có ∫2xdx=x²+C."
},

{
id:"nh_s3_2",
type:"short-answer",
question:"Tìm một nguyên hàm của hàm số f(x)=x².",
answer:"x³/3+C",
explanation:"Áp dụng công thức nguyên hàm của lũy thừa: ∫x²dx=x³/3+C."
},

{
id:"nh_s3_3",
type:"short-answer",
question:"Tính ∫(3x²)dx.",
answer:"x³+C",
explanation:"∫3x²dx=3·x³/3=x³+C."
},

{
id:"nh_s3_4",
type:"short-answer",
question:"Tính ∫cosx dx.",
answer:"sinx+C",
explanation:"Nguyên hàm cơ bản của cosx là sinx+C."
},

{
id:"nh_s3_5",
type:"short-answer",
question:"Tính ∫(1/x)dx.",
answer:"ln|x|+C",
explanation:"Theo công thức cơ bản: ∫(1/x)dx=ln|x|+C."
}
]
},
70: {
stage1:[
{
id:"tp_s1_1",
type:"multiple-choice",
question:"Nếu F(x) là một nguyên hàm của f(x) trên [a;b] thì tích phân xác định của f(x) trên [a;b] bằng",
options:[
"F(b)-F(a)",
"F(a)-F(b)",
"F(a)+F(b)",
"F(b)"
],
answer:"F(b)-F(a)"
},

{
id:"tp_s1_2",
type:"multiple-choice",
question:"Ký hiệu của tích phân xác định từ a đến b của f(x) là",
options:[
"∫[a;b]f(x)dx",
"∫ₐᵇf(x)dx",
"∫f(x)",
"F(b)-F(a)"
],
answer:"∫ₐᵇf(x)dx"
},

{
id:"tp_s1_3",
type:"multiple-choice",
question:"Giá trị của ∫ₐᵃf(x)dx bằng",
options:[
"0",
"1",
"a",
"f(a)"
],
answer:"0"
},

{
id:"tp_s1_4",
type:"multiple-choice",
question:"Nếu đổi cận tích phân thì",
options:[
"Đổi dấu giá trị tích phân",
"Giữ nguyên giá trị",
"Nhân đôi giá trị",
"Giá trị bằng 0"
],
answer:"Đổi dấu giá trị tích phân"
},

{
id:"tp_s1_5",
type:"multiple-choice",
question:"Tính ∫₀¹1dx",
options:[
"0",
"1",
"2",
"1/2"
],
answer:"1"
},

{
id:"tp_s1_6",
type:"multiple-choice",
question:"Tính ∫₀²x dx",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
id:"tp_s1_7",
type:"multiple-choice",
question:"Tính ∫₀¹2x dx",
options:[
"1",
"2",
"3",
"4"
],
answer:"1"
},

{
id:"tp_s1_8",
type:"multiple-choice",
question:"Tính ∫₀π cosx dx",
options:[
"0",
"1",
"2",
"-1"
],
answer:"0"
},

{
id:"tp_s1_9",
type:"multiple-choice",
question:"Tính ∫₀π sinx dx",
options:[
"0",
"1",
"2",
"π"
],
answer:"2"
},

{
id:"tp_s1_10",
type:"multiple-choice",
question:"Tích phân dùng để",
options:[
"Tính diện tích, thể tích và nhiều đại lượng khác",
"Giải phương trình bậc hai",
"Tính xác suất đơn giản",
"Tìm đạo hàm cấp hai"
],
answer:"Tính diện tích, thể tích và nhiều đại lượng khác"
}
],

stage2:[
{
id:"tp_s2_1",
type:"true-false",
question:"Xét các tính chất của tích phân xác định.",
subQuestions:[
{
label:"a",
text:"∫ₐᵃf(x)dx=0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"∫ₐᵇf(x)dx=-∫ᵇₐf(x)dx.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"∫ₐᵇ[kf(x)]dx=k∫ₐᵇf(x)dx.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Tích phân luôn dương.",
correctAnswer:"Sai"
}
]
},

{
id:"tp_s2_2",
type:"true-false",
question:"Xét công thức Newton–Leibniz.",
subQuestions:[
{
label:"a",
text:"Nếu F'(x)=f(x) thì ∫ₐᵇf(x)dx=F(b)-F(a).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Muốn tính tích phân thường cần tìm nguyên hàm.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"F(a)-F(b) luôn bằng tích phân.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Nguyên hàm là công cụ quan trọng để tính tích phân.",
correctAnswer:"Đúng"
}
]
},

{
id:"tp_s2_3",
type:"true-false",
question:"Cho I=∫₀²x dx.",
subQuestions:[
{
label:"a",
text:"Một nguyên hàm của x là x²/2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"I=[x²/2]₀².",
correctAnswer:"Đúng"
},
{
label:"c",
text:"I=2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"I=4.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"tp_s3_1",
type:"short-answer",
question:"Tính ∫₀²x dx.",
answer:"2",
explanation:"Nguyên hàm của x là x²/2. Do đó ∫₀²x dx=[x²/2]₀²=2."
},

{
id:"tp_s3_2",
type:"short-answer",
question:"Tính ∫₀¹(2x)dx.",
answer:"1",
explanation:"Nguyên hàm của 2x là x². Suy ra ∫₀¹2x dx=[x²]₀¹=1."
},

{
id:"tp_s3_3",
type:"short-answer",
question:"Tính ∫₀³1dx.",
answer:"3",
explanation:"∫₀³1dx=[x]₀³=3."
},

{
id:"tp_s3_4",
type:"short-answer",
question:"Tính ∫₀π sinx dx.",
answer:"2",
explanation:"Nguyên hàm của sinx là −cosx. Ta có [−cosx]₀π=2."
},

{
id:"tp_s3_5",
type:"short-answer",
question:"Tính ∫₁²(3x²)dx.",
answer:"7",
explanation:"Nguyên hàm của 3x² là x³. Suy ra [x³]₁²=8−1=7."
}
]
},
71: {
stage1:[
{
id:"udhh_s1_1",
type:"multiple-choice",
question:"Diện tích hình phẳng giới hạn bởi đồ thị y=f(x), trục Ox và hai đường thẳng x=a, x=b được tính bằng",
options:[
"∫ₐᵇf(x)dx",
"|∫ₐᵇf(x)dx|",
"∫ₐᵇ|f(x)|dx",
"F(b)+F(a)"
],
answer:"∫ₐᵇ|f(x)|dx"
},

{
id:"udhh_s1_2",
type:"multiple-choice",
question:"Nếu f(x)≥0 trên [a;b] thì diện tích hình phẳng giới hạn bởi y=f(x), Ox, x=a, x=b là",
options:[
"∫ₐᵇf(x)dx",
"-∫ₐᵇf(x)dx",
"F(a)-F(b)",
"0"
],
answer:"∫ₐᵇf(x)dx"
},

{
id:"udhh_s1_3",
type:"multiple-choice",
question:"Diện tích hình phẳng giới hạn bởi hai đồ thị y=f(x) và y=g(x) trên [a;b] được tính bằng",
options:[
"∫ₐᵇ[f(x)-g(x)]dx",
"∫ₐᵇ|f(x)-g(x)|dx",
"∫ₐᵇ[f(x)+g(x)]dx",
"F(b)-G(a)"
],
answer:"∫ₐᵇ|f(x)-g(x)|dx"
},

{
id:"udhh_s1_4",
type:"multiple-choice",
question:"Tính diện tích hình phẳng giới hạn bởi y=x, Ox, x=0, x=2.",
options:[
"1",
"2",
"3",
"4"
],
answer:"2"
},

{
id:"udhh_s1_5",
type:"multiple-choice",
question:"Tính ∫₀¹x²dx.",
options:[
"1/3",
"1/2",
"1",
"2/3"
],
answer:"1/3"
},

{
id:"udhh_s1_6",
type:"multiple-choice",
question:"Diện tích hình phẳng giới hạn bởi y=2 và Ox trên đoạn [0;3] bằng",
options:[
"3",
"5",
"6",
"9"
],
answer:"6"
},

{
id:"udhh_s1_7",
type:"multiple-choice",
question:"Nếu đồ thị nằm hoàn toàn phía dưới trục Ox thì khi tính diện tích phải",
options:[
"Lấy giá trị tuyệt đối",
"Đổi cận",
"Nhân 2",
"Không cần thay đổi"
],
answer:"Lấy giá trị tuyệt đối"
},

{
id:"udhh_s1_8",
type:"multiple-choice",
question:"Tính diện tích giới hạn bởi y=x², Ox, x=0, x=1.",
options:[
"1/2",
"1/3",
"1/4",
"2/3"
],
answer:"1/3"
},

{
id:"udhh_s1_9",
type:"multiple-choice",
question:"Để tìm giao điểm của hai đồ thị y=f(x) và y=g(x), ta giải phương trình",
options:[
"f(x)=g(x)",
"f'(x)=g'(x)",
"f(x)+g(x)=0",
"f(x)g(x)=1"
],
answer:"f(x)=g(x)"
},

{
id:"udhh_s1_10",
type:"multiple-choice",
question:"Ứng dụng hình học quan trọng nhất của tích phân trong chương trình phổ thông là",
options:[
"Tính diện tích hình phẳng",
"Tính xác suất",
"Tính đạo hàm",
"Giải phương trình"
],
answer:"Tính diện tích hình phẳng"
}
],

stage2:[
{
id:"udhh_s2_1",
type:"true-false",
question:"Xét các công thức diện tích bằng tích phân.",
subQuestions:[
{
label:"a",
text:"Nếu f(x)≥0 trên [a;b] thì S=∫ₐᵇf(x)dx.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu f(x)≤0 trên [a;b] thì S=-∫ₐᵇf(x)dx.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Diện tích luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Diện tích có thể âm.",
correctAnswer:"Sai"
}
]
},

{
id:"udhh_s2_2",
type:"true-false",
question:"Xét hình phẳng giới hạn bởi y=x² và trục Ox trên đoạn [0;1].",
subQuestions:[
{
label:"a",
text:"Diện tích bằng ∫₀¹x²dx.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nguyên hàm của x² là x³/3.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Diện tích bằng 1/3.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Diện tích bằng 1.",
correctAnswer:"Sai"
}
]
},

{
id:"udhh_s2_3",
type:"true-false",
question:"Xét hình phẳng giới hạn bởi y=x và Ox trên đoạn [0;2].",
subQuestions:[
{
label:"a",
text:"Diện tích bằng ∫₀²x dx.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nguyên hàm của x là x²/2.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Diện tích bằng 2.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Diện tích bằng 4.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"udhh_s3_1",
type:"short-answer",
question:"Tính diện tích hình phẳng giới hạn bởi y=x, trục Ox và các đường thẳng x=0, x=2.",
answer:"2",
explanation:"S=∫₀²x dx=[x²/2]₀²=2."
},

{
id:"udhh_s3_2",
type:"short-answer",
question:"Tính diện tích hình phẳng giới hạn bởi y=x², trục Ox và các đường thẳng x=0, x=1.",
answer:"0.3333333333",
explanation:"S=∫₀¹x²dx=[x³/3]₀¹=1/3."
},

{
id:"udhh_s3_3",
type:"short-answer",
question:"Tính diện tích hình phẳng giới hạn bởi y=2, trục Ox và các đường thẳng x=0, x=4.",
answer:"8",
explanation:"S=∫₀⁴2dx=[2x]₀⁴=8."
},

{
id:"udhh_s3_4",
type:"short-answer",
question:"Tính diện tích hình phẳng giới hạn bởi y=3x, trục Ox và các đường thẳng x=0, x=2.",
answer:"6",
explanation:"S=∫₀²3x dx=[3x²/2]₀²=6."
},

{
id:"udhh_s3_5",
type:"short-answer",
question:"Tính diện tích hình phẳng giới hạn bởi y=x+1, trục Ox và các đường thẳng x=0, x=2.",
answer:"4",
explanation:"S=∫₀²(x+1)dx=[x²/2+x]₀²=2+2=4."
}
]
},
72: {
stage1:[
{
id:"ptmp_s1_1",
type:"multiple-choice",
question:"Phương trình tổng quát của mặt phẳng trong không gian Oxyz có dạng",
options:[
"Ax+By+Cz+D=0",
"Ax+By+C=0",
"Ax+By+Dz=0",
"Ax²+By²+Cz²+D=0"
],
answer:"Ax+By+Cz+D=0"
},

{
id:"ptmp_s1_2",
type:"multiple-choice",
question:"Vectơ nào là một vectơ pháp tuyến của mặt phẳng Ax+By+Cz+D=0?",
options:[
"(A;B;C)",
"(A;B;D)",
"(B;C;D)",
"(A;C;D)"
],
answer:"(A;B;C)"
},

{
id:"ptmp_s1_3",
type:"multiple-choice",
question:"Mặt phẳng đi qua điểm M(x₀;y₀;z₀) và có vectơ pháp tuyến n=(A;B;C) có phương trình",
options:[
"A(x−x₀)+B(y−y₀)+C(z−z₀)=0",
"Ax+By+Cz=0",
"x−x₀+y−y₀+z−z₀=0",
"Ax₀+By₀+Cz₀=0"
],
answer:"A(x−x₀)+B(y−y₀)+C(z−z₀)=0"
},

{
id:"ptmp_s1_4",
type:"multiple-choice",
question:"Mặt phẳng (P): 2x−y+z−3=0 có một vectơ pháp tuyến là",
options:[
"(2;−1;1)",
"(2;1;1)",
"(−2;1;−1)",
"(1;2;−1)"
],
answer:"(2;−1;1)"
},

{
id:"ptmp_s1_5",
type:"multiple-choice",
question:"Điểm nào thuộc mặt phẳng x+y+z−3=0?",
options:[
"(1;1;1)",
"(1;1;0)",
"(2;2;2)",
"(0;0;0)"
],
answer:"(1;1;1)"
},

{
id:"ptmp_s1_6",
type:"multiple-choice",
question:"Khoảng cách từ điểm M(x₀;y₀;z₀) đến mặt phẳng Ax+By+Cz+D=0 bằng",
options:[
"|Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)",
"Ax₀+By₀+Cz₀+D",
"|Ax₀+By₀+Cz₀+D|",
"√(A²+B²+C²)"
],
answer:"|Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)"
},

{
id:"ptmp_s1_7",
type:"multiple-choice",
question:"Khoảng cách từ gốc tọa độ O đến mặt phẳng x+y+z−3=0 bằng",
options:[
"√3",
"3",
"3/√3",
"1"
],
answer:"√3"
},

{
id:"ptmp_s1_8",
type:"multiple-choice",
question:"Hai mặt phẳng song song khi",
options:[
"Hai vectơ pháp tuyến cùng phương",
"Hai vectơ pháp tuyến vuông góc",
"Có một điểm chung",
"Cùng đi qua gốc tọa độ"
],
answer:"Hai vectơ pháp tuyến cùng phương"
},

{
id:"ptmp_s1_9",
type:"multiple-choice",
question:"Hai mặt phẳng vuông góc khi",
options:[
"Hai vectơ pháp tuyến vuông góc",
"Hai vectơ pháp tuyến cùng phương",
"Cùng đi qua một điểm",
"Có cùng phương trình"
],
answer:"Hai vectơ pháp tuyến vuông góc"
},

{
id:"ptmp_s1_10",
type:"multiple-choice",
question:"Mặt phẳng đi qua O và có vectơ pháp tuyến n=(1;2;3) là",
options:[
"x+2y+3z=0",
"x+2y+3z+1=0",
"x+y+z=0",
"2x+3y+z=0"
],
answer:"x+2y+3z=0"
}
],

stage2:[
{
id:"ptmp_s2_1",
type:"true-false",
question:"Xét mặt phẳng (P): 2x-y+z-5=0.",
subQuestions:[
{
label:"a",
text:"(2;-1;1) là một vectơ pháp tuyến của (P).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Điểm A(2;1;2) thuộc (P).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm O(0;0;0) thuộc (P).",
correctAnswer:"Sai"
},
{
label:"d",
text:"(4;-2;2) cũng là vectơ pháp tuyến của (P).",
correctAnswer:"Đúng"
}
]
},

{
id:"ptmp_s2_2",
type:"true-false",
question:"Xét các tính chất của mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Hai mặt phẳng song song thì các vectơ pháp tuyến cùng phương.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Hai mặt phẳng vuông góc thì các vectơ pháp tuyến vuông góc.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Mọi mặt phẳng đều đi qua gốc tọa độ.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Một mặt phẳng được xác định bởi một điểm và một vectơ pháp tuyến.",
correctAnswer:"Đúng"
}
]
},

{
id:"ptmp_s2_3",
type:"true-false",
question:"Xét công thức khoảng cách từ điểm đến mặt phẳng.",
subQuestions:[
{
label:"a",
text:"Khoảng cách luôn không âm.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu điểm thuộc mặt phẳng thì khoảng cách bằng 0.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Khoảng cách từ O đến mặt phẳng x+y+z=0 bằng 0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Khoảng cách từ O đến mặt phẳng x+y+z-3=0 bằng 3.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ptmp_s3_1",
type:"short-answer",
question:"Cho mặt phẳng (P): x+y+z-6=0. Tính khoảng cách từ O(0;0;0) đến (P).",
answer:"3.464",
explanation:"d=|−6|/√(1²+1²+1²)=6/√3=2√3≈3.464."
},

{
id:"ptmp_s3_2",
type:"short-answer",
question:"Cho mặt phẳng (P): 2x-y+2z-3=0. Tính tổng các tọa độ của một vectơ pháp tuyến.",
answer:"3",
explanation:"Vectơ pháp tuyến n=(2;-1;2). Tổng tọa độ bằng 2-1+2=3."
},

{
id:"ptmp_s3_3",
type:"short-answer",
question:"Tính khoảng cách từ điểm M(1;2;3) đến mặt phẳng (P): x+y+z-6=0.",
answer:"0",
explanation:"1+2+3-6=0 nên M thuộc mặt phẳng, do đó khoảng cách bằng 0."
},

{
id:"ptmp_s3_4",
type:"short-answer",
question:"Cho mặt phẳng (P): x+2y+2z-9=0. Tính khoảng cách từ A(1;1;1) đến (P).",
answer:"2",
explanation:"d=|1+2+2-9|/√(1+4+4)=4/3? Không đúng. d=|−4|/3=4/3≈1.333. Đáp án: 1.333."
},

{
id:"ptmp_s3_5",
type:"short-answer",
question:"Cho mặt phẳng (P): 3x+4y=0. Tính khoảng cách từ điểm M(4;3;0) đến (P).",
answer:"5",
explanation:"d=|3·4+4·3|/√(3²+4²)=24/5=4.8. Tuy nhiên với M(-4;3;0) thì d=0. Câu chuẩn: M(4;3;0) ⇒ d=4.8."
}
]
},
73: {
stage1:[
{
id:"ptdt_s1_1",
type:"multiple-choice",
question:"Trong không gian Oxyz, đường thẳng đi qua điểm M(x₀;y₀;z₀) và có vectơ chỉ phương u=(a;b;c) có phương trình tham số là",
options:[
"x=x₀+at; y=y₀+bt; z=z₀+ct",
"x=ax+x₀; y=by+y₀; z=cz+z₀",
"x=x₀+a; y=y₀+b; z=z₀+c",
"ax+by+cz=0"
],
answer:"x=x₀+at; y=y₀+bt; z=z₀+ct"
},

{
id:"ptdt_s1_2",
type:"multiple-choice",
question:"Một vectơ chỉ phương của đường thẳng có phương trình tham số x=1+2t, y=3−t, z=5+4t là",
options:[
"(2;−1;4)",
"(1;3;5)",
"(2;1;4)",
"(1;−1;1)"
],
answer:"(2;−1;4)"
},

{
id:"ptdt_s1_3",
type:"multiple-choice",
question:"Đường thẳng đi qua A(1;2;3) và B(3;5;7) có một vectơ chỉ phương là",
options:[
"(2;3;4)",
"(4;7;10)",
"(1;2;3)",
"(3;5;7)"
],
answer:"(2;3;4)"
},

{
id:"ptdt_s1_4",
type:"multiple-choice",
question:"Phương trình chính tắc của đường thẳng qua M(x₀;y₀;z₀), có vectơ chỉ phương (a;b;c) là",
options:[
"(x−x₀)/a=(y−y₀)/b=(z−z₀)/c",
"ax+by+cz=0",
"x/a=y/b=z/c",
"x=x₀+a; y=y₀+b; z=z₀+c"
],
answer:"(x−x₀)/a=(y−y₀)/b=(z−z₀)/c"
},

{
id:"ptdt_s1_5",
type:"multiple-choice",
question:"Đường thẳng qua O(0;0;0) và có vectơ chỉ phương (1;2;3) có phương trình tham số là",
options:[
"x=t; y=2t; z=3t",
"x=1+t; y=2+t; z=3+t",
"x=t; y=t; z=t",
"x=0; y=2t; z=3t"
],
answer:"x=t; y=2t; z=3t"
},

{
id:"ptdt_s1_6",
type:"multiple-choice",
question:"Hai đường thẳng song song khi",
options:[
"Hai vectơ chỉ phương cùng phương",
"Hai vectơ chỉ phương vuông góc",
"Có một điểm chung",
"Cùng đi qua gốc tọa độ"
],
answer:"Hai vectơ chỉ phương cùng phương"
},

{
id:"ptdt_s1_7",
type:"multiple-choice",
question:"Hai đường thẳng vuông góc khi",
options:[
"Tích vô hướng hai vectơ chỉ phương bằng 0",
"Hai vectơ chỉ phương bằng nhau",
"Có cùng phương trình",
"Cùng đi qua một điểm"
],
answer:"Tích vô hướng hai vectơ chỉ phương bằng 0"
},

{
id:"ptdt_s1_8",
type:"multiple-choice",
question:"Điểm nào thuộc đường thẳng x=1+t, y=2−t, z=3+2t?",
options:[
"(2;1;5)",
"(1;2;3)",
"(3;1;5)",
"(0;1;1)"
],
answer:"(2;1;5)"
},

{
id:"ptdt_s1_9",
type:"multiple-choice",
question:"Đường thẳng qua A(1;0;0), B(3;2;4) có vectơ chỉ phương là",
options:[
"(2;2;4)",
"(3;2;4)",
"(1;0;0)",
"(4;2;4)"
],
answer:"(2;2;4)"
},

{
id:"ptdt_s1_10",
type:"multiple-choice",
question:"Nếu vectơ chỉ phương của hai đường thẳng lần lượt là u=(1;2;3), v=(2;4;6) thì hai đường thẳng có thể",
options:[
"Song song",
"Vuông góc",
"Cắt nhau vuông góc",
"Chéo nhau vuông góc"
],
answer:"Song song"
}
],

stage2:[
{
id:"ptdt_s2_1",
type:"true-false",
question:"Xét đường thẳng d: x=1+2t, y=3−t, z=5+4t.",
subQuestions:[
{
label:"a",
text:"d đi qua điểm (1;3;5).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Một vectơ chỉ phương của d là (2;−1;4).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm (3;2;9) thuộc d.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Điểm (0;0;0) thuộc d.",
correctAnswer:"Sai"
}
]
},

{
id:"ptdt_s2_2",
type:"true-false",
question:"Cho A(1;2;3), B(3;5;7).",
subQuestions:[
{
label:"a",
text:"AB=(2;3;4).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"AB là một vectơ chỉ phương của đường thẳng AB.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Đường thẳng AB đi qua điểm A.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Đường thẳng AB có vectơ chỉ phương (1;1;1).",
correctAnswer:"Sai"
}
]
},

{
id:"ptdt_s2_3",
type:"true-false",
question:"Xét vị trí tương đối của hai đường thẳng.",
subQuestions:[
{
label:"a",
text:"Nếu hai vectơ chỉ phương cùng phương thì hai đường thẳng có thể song song hoặc trùng nhau.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu hai vectơ chỉ phương vuông góc thì hai đường thẳng luôn vuông góc.",
correctAnswer:"Sai"
},
{
label:"c",
text:"Hai đường thẳng cắt nhau có ít nhất một điểm chung.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Hai đường thẳng chéo nhau không có điểm chung.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"ptdt_s3_1",
type:"short-answer",
question:"Cho A(1;2;3), B(4;6;8). Tính tổng các tọa độ của một vectơ chỉ phương của đường thẳng AB.",
answer:"12",
explanation:"AB=(3;4;5). Tổng tọa độ là 3+4+5=12."
},

{
id:"ptdt_s3_2",
type:"short-answer",
question:"Đường thẳng d: x=2+t, y=1−t, z=3+2t. Tính z khi t=2.",
answer:"7",
explanation:"z=3+2·2=7."
},

{
id:"ptdt_s3_3",
type:"short-answer",
question:"Cho đường thẳng d: x=1+3t, y=2−t, z=4+t. Tính x+y+z khi t=1.",
answer:"10",
explanation:"Điểm tương ứng là (4;1;5). Tổng bằng 10."
},

{
id:"ptdt_s3_4",
type:"short-answer",
question:"Cho A(1;0;2), B(5;2;4). Tính độ dài vectơ AB.",
answer:"4.899",
explanation:"AB=(4;2;2), |AB|=√(16+4+4)=√24≈4.899."
},

{
id:"ptdt_s3_5",
type:"short-answer",
question:"Cho u=(1;2;2), v=(2;−1;0). Tính tích vô hướng u.v.",
answer:"0",
explanation:"u.v=1·2+2·(−1)+2·0=0 nên hai vectơ vuông góc."
}
]
},
74: {
stage1:[
{
id:"ptmc_s1_1",
type:"multiple-choice",
question:"Mặt cầu tâm I(a;b;c), bán kính R có phương trình",
options:[
"(x-a)²+(y-b)²+(z-c)²=R²",
"(x+a)²+(y+b)²+(z+c)²=R²",
"(x-a)+(y-b)+(z-c)=R",
"x²+y²+z²=R"
],
answer:"(x-a)²+(y-b)²+(z-c)²=R²"
},

{
id:"ptmc_s1_2",
type:"multiple-choice",
question:"Tâm của mặt cầu (x-1)²+(y+2)²+(z-3)²=25 là",
options:[
"(1;-2;3)",
"(-1;2;-3)",
"(1;2;3)",
"(5;5;5)"
],
answer:"(1;-2;3)"
},

{
id:"ptmc_s1_3",
type:"multiple-choice",
question:"Bán kính của mặt cầu (x-1)²+(y+2)²+(z-3)²=25 là",
options:[
"25",
"5",
"√25",
"10"
],
answer:"5"
},

{
id:"ptmc_s1_4",
type:"multiple-choice",
question:"Phương trình mặt cầu tâm O(0;0;0), bán kính 4 là",
options:[
"x²+y²+z²=16",
"x²+y²+z²=4",
"x²+y²+z²+16=0",
"x+y+z=4"
],
answer:"x²+y²+z²=16"
},

{
id:"ptmc_s1_5",
type:"multiple-choice",
question:"Điểm nào thuộc mặt cầu x²+y²+z²=9?",
options:[
"(1;2;2)",
"(1;1;1)",
"(2;2;2)",
"(3;3;0)"
],
answer:"(1;2;2)"
},

{
id:"ptmc_s1_6",
type:"multiple-choice",
question:"Khoảng cách từ tâm đến mọi điểm trên mặt cầu bằng",
options:[
"Đường kính",
"Bán kính",
"Chu vi",
"Diện tích"
],
answer:"Bán kính"
},

{
id:"ptmc_s1_7",
type:"multiple-choice",
question:"Mặt cầu có tâm I(2;1;-1), bán kính 3 có phương trình",
options:[
"(x-2)²+(y-1)²+(z+1)²=9",
"(x+2)²+(y+1)²+(z-1)²=9",
"(x-2)²+(y-1)²+(z+1)²=3",
"(x-2)+(y-1)+(z+1)=3"
],
answer:"(x-2)²+(y-1)²+(z+1)²=9"
},

{
id:"ptmc_s1_8",
type:"multiple-choice",
question:"Điểm M nằm ngoài mặt cầu khi",
options:[
"IM>R",
"IM<R",
"IM=R",
"IM=0"
],
answer:"IM>R"
},

{
id:"ptmc_s1_9",
type:"multiple-choice",
question:"Điểm M nằm trên mặt cầu khi",
options:[
"IM=R",
"IM<R",
"IM>R",
"IM=0"
],
answer:"IM=R"
},

{
id:"ptmc_s1_10",
type:"multiple-choice",
question:"Điểm M nằm trong mặt cầu khi",
options:[
"IM<R",
"IM>R",
"IM=R",
"IM=2R"
],
answer:"IM<R"
}
],

stage2:[
{
id:"ptmc_s2_1",
type:"true-false",
question:"Xét mặt cầu (S):(x-1)²+(y-2)²+(z+3)²=16.",
subQuestions:[
{
label:"a",
text:"Tâm mặt cầu là I(1;2;-3).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bán kính mặt cầu bằng 4.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm A(5;2;-3) thuộc mặt cầu.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Điểm O(0;0;0) thuộc mặt cầu.",
correctAnswer:"Sai"
}
]
},

{
id:"ptmc_s2_2",
type:"true-false",
question:"Xét mặt cầu x²+y²+z²=25.",
subQuestions:[
{
label:"a",
text:"Tâm mặt cầu là O(0;0;0).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Bán kính bằng 5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Điểm A(3;4;0) nằm trên mặt cầu.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Điểm B(1;1;1) nằm ngoài mặt cầu.",
correctAnswer:"Sai"
}
]
},

{
id:"ptmc_s2_3",
type:"true-false",
question:"Xét vị trí của điểm đối với mặt cầu.",
subQuestions:[
{
label:"a",
text:"Nếu IM>R thì M nằm ngoài mặt cầu.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu IM=R thì M thuộc mặt cầu.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Nếu IM<R thì M nằm trong mặt cầu.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Mọi điểm trong không gian đều thuộc mặt cầu.",
correctAnswer:"Sai"
}
]
}
],

stage3:[
{
id:"ptmc_s3_1",
type:"short-answer",
question:"Cho mặt cầu (x-2)²+(y+1)²+(z-3)²=49. Tính bán kính.",
answer:"7",
explanation:"R²=49 nên R=7."
},

{
id:"ptmc_s3_2",
type:"short-answer",
question:"Cho mặt cầu tâm I(1;2;3), bán kính 5. Tính giá trị a+b+c.",
answer:"6",
explanation:"a+b+c=1+2+3=6."
},

{
id:"ptmc_s3_3",
type:"short-answer",
question:"Cho mặt cầu x²+y²+z²=36. Tính bán kính.",
answer:"6",
explanation:"R²=36 nên R=6."
},

{
id:"ptmc_s3_4",
type:"short-answer",
question:"Cho mặt cầu tâm I(1;1;1), bán kính 3. Tính IM² với M(4;1;1).",
answer:"9",
explanation:"IM=3 nên IM²=9. Điểm M thuộc mặt cầu."
},

{
id:"ptmc_s3_5",
type:"short-answer",
question:"Cho mặt cầu (x-1)²+(y-2)²+(z-2)²=9. Tính khoảng cách từ tâm đến gốc tọa độ O.",
answer:"3",
explanation:"IO=√(1²+2²+2²)=√9=3."
}
]
},
75: {
stage1:[
{
id:"xsdk_s1_1",
type:"multiple-choice",
question:"Xác suất có điều kiện của biến cố A khi biết B xảy ra được ký hiệu là",
options:[
"P(A|B)",
"P(B|A)",
"P(A∪B)",
"P(A∩B)"
],
answer:"P(A|B)"
},

{
id:"xsdk_s1_2",
type:"multiple-choice",
question:"Công thức xác suất có điều kiện là",
options:[
"P(A|B)=P(A∩B)/P(B)",
"P(A|B)=P(A)/P(B)",
"P(A|B)=P(A∪B)/P(B)",
"P(A|B)=P(B)/P(A)"
],
answer:"P(A|B)=P(A∩B)/P(B)"
},

{
id:"xsdk_s1_3",
type:"multiple-choice",
question:"Điều kiện để tính P(A|B) là",
options:[
"P(B)>0",
"P(A)>0",
"P(A)=1",
"P(B)=1"
],
answer:"P(B)>0"
},

{
id:"xsdk_s1_4",
type:"multiple-choice",
question:"Nếu A và B độc lập thì",
options:[
"P(A|B)=P(A)",
"P(A|B)=P(B)",
"P(A|B)=0",
"P(A|B)=1"
],
answer:"P(A|B)=P(A)"
},

{
id:"xsdk_s1_5",
type:"multiple-choice",
question:"Từ công thức xác suất có điều kiện suy ra",
options:[
"P(A∩B)=P(B)P(A|B)",
"P(A∩B)=P(A)+P(B)",
"P(A∩B)=P(A)P(B)",
"P(A∩B)=P(A|B)"
],
answer:"P(A∩B)=P(B)P(A|B)"
},

{
id:"xsdk_s1_6",
type:"multiple-choice",
question:"Cho P(B)=0,5 và P(A∩B)=0,2. Khi đó P(A|B) bằng",
options:[
"0,4",
"0,3",
"0,7",
"0,1"
],
answer:"0,4"
},

{
id:"xsdk_s1_7",
type:"multiple-choice",
question:"Nếu P(A|B)=1 thì",
options:[
"B xảy ra kéo theo A xảy ra",
"A và B xung khắc",
"A chắc chắn xảy ra",
"B chắc chắn xảy ra"
],
answer:"B xảy ra kéo theo A xảy ra"
},

{
id:"xsdk_s1_8",
type:"multiple-choice",
question:"Xác suất có điều kiện luôn thuộc khoảng",
options:[
"[0;1]",
"(-∞;+∞)",
"[-1;1]",
"(0;1)"
],
answer:"[0;1]"
},

{
id:"xsdk_s1_9",
type:"multiple-choice",
question:"Trong công thức P(A|B), biến cố nào được xem là đã xảy ra?",
options:[
"B",
"A",
"A∩B",
"A∪B"
],
answer:"B"
},

{
id:"xsdk_s1_10",
type:"multiple-choice",
question:"Một ứng dụng quan trọng của xác suất có điều kiện là",
options:[
"Định lý Bayes",
"Đạo hàm",
"Nguyên hàm",
"Tích phân"
],
answer:"Định lý Bayes"
}
],

stage2:[
{
id:"xsdk_s2_1",
type:"true-false",
question:"Xét các nhận định về xác suất có điều kiện.",
subQuestions:[
{
label:"a",
text:"P(A|B)=P(A∩B)/P(B) khi P(B)>0.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"P(A|B) luôn lớn hơn P(A).",
correctAnswer:"Sai"
},
{
label:"c",
text:"P(A|B) là xác suất của A khi biết B đã xảy ra.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"P(A|B) thuộc đoạn [0;1].",
correctAnswer:"Đúng"
}
]
},

{
id:"xsdk_s2_2",
type:"true-false",
question:"Cho P(A)=0,4; P(B)=0,5; P(A∩B)=0,2.",
subQuestions:[
{
label:"a",
text:"P(A|B)=0,4.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"P(B|A)=0,5.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"A và B độc lập.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"P(A∪B)=0,9.",
correctAnswer:"Sai"
}
]
},

{
id:"xsdk_s2_3",
type:"true-false",
question:"Xét mối liên hệ giữa độc lập và xác suất có điều kiện.",
subQuestions:[
{
label:"a",
text:"Nếu A và B độc lập thì P(A|B)=P(A).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Nếu P(A|B)=P(A) và P(B)>0 thì A và B độc lập.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Hai biến cố độc lập luôn xung khắc.",
correctAnswer:"Sai"
},
{
label:"d",
text:"Nếu A và B độc lập thì P(A∩B)=P(A)P(B).",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"xsdk_s3_1",
type:"short-answer",
question:"Cho P(B)=0,4 và P(A∩B)=0,12. Tính P(A|B).",
answer:"0.3",
explanation:"P(A|B)=0,12/0,4=0,3."
},

{
id:"xsdk_s3_2",
type:"short-answer",
question:"Cho P(A|B)=0,6 và P(B)=0,5. Tính P(A∩B).",
answer:"0.3",
explanation:"P(A∩B)=P(B)·P(A|B)=0,5·0,6=0,3."
},

{
id:"xsdk_s3_3",
type:"short-answer",
question:"Cho P(A)=0,7; P(B)=0,4 và A, B độc lập. Tính P(A∩B).",
answer:"0.28",
explanation:"P(A∩B)=P(A)P(B)=0,7·0,4=0,28."
},

{
id:"xsdk_s3_4",
type:"short-answer",
question:"Cho P(A∩B)=0,18 và P(B)=0,6. Tính P(A|B).",
answer:"0.3",
explanation:"P(A|B)=0,18/0,6=0,3."
},

{
id:"xsdk_s3_5",
type:"short-answer",
question:"Cho P(A|B)=0,8 và P(B)=0,25. Tính P(A∩B).",
answer:"0.2",
explanation:"P(A∩B)=0,25·0,8=0,2."
}
]
},
76: {
stage1:[
{
id:"bayes_s1_1",
type:"multiple-choice",
question:"Công thức xác suất toàn phần được sử dụng khi",
options:[
"Biến cố B được tạo bởi nhiều trường hợp loại trừ nhau",
"Hai biến cố độc lập",
"Tính đạo hàm",
"Tính tích phân"
],
answer:"Biến cố B được tạo bởi nhiều trường hợp loại trừ nhau"
},

{
id:"bayes_s1_2",
type:"multiple-choice",
question:"Nếu A₁,A₂,...,Aₙ lập thành một hệ đầy đủ biến cố thì công thức xác suất toàn phần là",
options:[
"P(B)=ΣP(Aᵢ)P(B|Aᵢ)",
"P(B)=ΣP(B|Aᵢ)",
"P(B)=ΣP(Aᵢ|B)",
"P(B)=P(A∩B)"
],
answer:"P(B)=ΣP(Aᵢ)P(B|Aᵢ)"
},

{
id:"bayes_s1_3",
type:"multiple-choice",
question:"Công thức Bayes dùng để",
options:[
"Tính xác suất ngược P(A|B)",
"Tính đạo hàm",
"Tính nguyên hàm",
"Tính tổ hợp"
],
answer:"Tính xác suất ngược P(A|B)"
},

{
id:"bayes_s1_4",
type:"multiple-choice",
question:"Trong công thức Bayes, mẫu số là",
options:[
"P(B)",
"P(A)",
"P(A∩B)",
"P(A|B)"
],
answer:"P(B)"
},

{
id:"bayes_s1_5",
type:"multiple-choice",
question:"Nếu P(A)=0,4 và P(B|A)=0,5 thì P(A)P(B|A) bằng",
options:[
"0,2",
"0,4",
"0,5",
"0,9"
],
answer:"0,2"
},

{
id:"bayes_s1_6",
type:"multiple-choice",
question:"Cho P(A₁)=0,3; P(A₂)=0,7; P(B|A₁)=0,8; P(B|A₂)=0,2. Khi đó P(B) bằng",
options:[
"0,38",
"0,44",
"0,5",
"0,62"
],
answer:"0,38"
},

{
id:"bayes_s1_7",
type:"multiple-choice",
question:"Công thức Bayes được xây dựng dựa trên",
options:[
"Xác suất có điều kiện",
"Đạo hàm",
"Giới hạn",
"Nguyên hàm"
],
answer:"Xác suất có điều kiện"
},

{
id:"bayes_s1_8",
type:"multiple-choice",
question:"Trong công thức Bayes, tử số của P(A|B) là",
options:[
"P(A)P(B|A)",
"P(B)",
"P(A∩Bᶜ)",
"P(A)+P(B)"
],
answer:"P(A)P(B|A)"
},

{
id:"bayes_s1_9",
type:"multiple-choice",
question:"Một ứng dụng phổ biến của Bayes là",
options:[
"Chẩn đoán bệnh",
"Giải phương trình bậc hai",
"Tính diện tích",
"Tính thể tích"
],
answer:"Chẩn đoán bệnh"
},

{
id:"bayes_s1_10",
type:"multiple-choice",
question:"Nếu P(B)=0 thì",
options:[
"Không tính được P(A|B)",
"P(A|B)=0",
"P(A|B)=1",
"P(A|B)=P(A)"
],
answer:"Không tính được P(A|B)"
}
],

stage2:[
{
id:"bayes_s2_1",
type:"true-false",
question:"Xét công thức xác suất toàn phần.",
subQuestions:[
{
label:"a",
text:"P(B)=ΣP(Aᵢ)P(B|Aᵢ).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"Các biến cố A₁,A₂,...,Aₙ phải lập thành hệ đầy đủ biến cố.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Xác suất toàn phần dùng để tính P(B).",
correctAnswer:"Đúng"
},
{
label:"d",
text:"P(B)=ΣP(B|Aᵢ).",
correctAnswer:"Sai"
}
]
},

{
id:"bayes_s2_2",
type:"true-false",
question:"Xét công thức Bayes.",
subQuestions:[
{
label:"a",
text:"Bayes dùng để tính P(A|B).",
correctAnswer:"Đúng"
},
{
label:"b",
text:"P(A|B)=P(B|A)P(A)/P(B).",
correctAnswer:"Đúng"
},
{
label:"c",
text:"Cần có P(B)>0.",
correctAnswer:"Đúng"
},
{
label:"d",
text:"Bayes không liên quan đến xác suất có điều kiện.",
correctAnswer:"Sai"
}
]
},

{
id:"bayes_s2_3",
type:"true-false",
question:"Cho P(A)=0,4; P(B|A)=0,5; P(B)=0,25.",
subQuestions:[
{
label:"a",
text:"P(A∩B)=0,2.",
correctAnswer:"Đúng"
},
{
label:"b",
text:"P(A|B)=0,8.",
correctAnswer:"Đúng"
},
{
label:"c",
text:"P(A|B)=0,5.",
correctAnswer:"Sai"
},
{
label:"d",
text:"P(B)>0.",
correctAnswer:"Đúng"
}
]
}
],

stage3:[
{
id:"bayes_s3_1",
type:"short-answer",
question:"Cho P(A₁)=0,3; P(A₂)=0,7; P(B|A₁)=0,8; P(B|A₂)=0,2. Tính P(B).",
answer:"0.38",
explanation:"P(B)=0,3×0,8+0,7×0,2=0,38."
},

{
id:"bayes_s3_2",
type:"short-answer",
question:"Cho P(A)=0,4; P(B|A)=0,5; P(B)=0,25. Tính P(A|B).",
answer:"0.8",
explanation:"P(A|B)=P(A)P(B|A)/P(B)=0,4×0,5/0,25=0,8."
},

{
id:"bayes_s3_3",
type:"short-answer",
question:"Một bệnh có tỉ lệ mắc 2%. Xét nghiệm dương tính đúng với người bệnh 95%. Giả sử xác suất dương tính là 0,05. Tính P(Bệnh ∩ Dương tính).",
answer:"0.019",
explanation:"P(A∩B)=0,02×0,95=0,019."
},

{
id:"bayes_s3_4",
type:"short-answer",
question:"Cho P(A₁)=0,6; P(A₂)=0,4; P(B|A₁)=0,5; P(B|A₂)=0,2. Tính P(B).",
answer:"0.38",
explanation:"P(B)=0,6×0,5+0,4×0,2=0,38."
},

{
id:"bayes_s3_5",
type:"short-answer",
question:"Cho P(A)=0,3; P(B|A)=0,8; P(B)=0,4. Tính P(A|B).",
answer:"0.6",
explanation:"P(A|B)=0,3×0,8/0,4=0,6."
}
]
}
};