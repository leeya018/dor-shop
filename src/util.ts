interface Slide {
  image: string;
  text: string;
}

interface Post {
  image: string;
}

export const postList: Post[] = [
  {
    image: "/images/posts/1.jpg",
  },
  {
    image: "/images/posts/2.jpg",
  },
  {
    image: "/images/posts/3.jpg",
  },
  {
    image: "/images/posts/4.jpg",
  },
  {
    image: "/images/posts/5.jpg",
  },
];
export const slides: Slide[] = [
  {
    image: "/images/slider/1.jpg",
    text: "הטקסט מספר על ילדות בשכונת מוסררה בירושלים, שהייתה פעם שכונה פשוטה והפכה עם הזמן לשכונת יוקרה. המחבר מתאר את ההתרחשויות בשכונה, כמו התחלפות התושבים לברסלברים, והזכויות שהשכונה קמה לתחייה. המחבר גדל בסביבה עשירה בתרבויות ושפות שונות, כולל עברית, צרפתית, ספרדית, יידיש, ערבית מרוקאית ואנגלית, מה שהשפיע עליו באופן חיובי.",
  },
  {
    image: "/images/slider/2.jpg",
    text: "אהלן עולם! רוצה לחצות אותך, להגיע אל לב כולם, שישמעו, שיקשיבו, שידעו שזה בסדר להתבטא ולא לחתום שהכול טוב או רע.",
  },
  {
    image: "/images/slider/3.jpg",
    text: "יש דרך ויש לה המון ערך. כותבת חיים מלשמוע על אחרים, כותבת כי בעצמי חוצה אוקיינוסים כל רגע וגם בין רגע לרגע. מלחינה, שרה ויש לי כבר כמה שירים בערוצים כמו יוטיוב, אפל, ספוטיפיי ועוד.",
  },

  // Add more slides as needed
];

export const Options = {
  wallets: "wallets",
  boxes: "boxes",
  ashtrays: "ashtrays",
};

interface Creator {
  image: string;
  name: string;
  songsDesc: string[];
  description: string[];
}
export const creator: Creator = {
  image: "/images/orly1.jpg",
  name: "אורלי וייסמן",
  songsDesc: [
    "אהלן עולם",
    "רוצה לחצות אותך, להגיע אל לב כולם",
    "שישמעו שיקשיבו שידעו",
    "שזה בסדר להתבטא ולא לחתום שהכול טוב או רע",
    "יש דרך ויש לה המון ערך.",
    "",
    "כותבת חיים מלשמוע על אחרים",
    "כותבת כי בעצמי חוצה אוקיינוסים",
    "כל רגע וגם בין רגע לרגע",
    "מלחינה שרה ויש לי כבר כמה בכל מיני ערוצים.",
    "יוטיוב אפל ספוטיפיי ועוד...",
    "",
    "גדלתי בשכונת מורשה מוסררה בירושלים",
    "קמתי ונעמדתי על הרגליים",
    "והיום זו שכונת יוקרה, המחירים שברו את התקרה",
    "התושבים התחלפו מקיבוץ גלויות לברסלברים מלא ילדים",
    "השכונה מחדש קמה לתחיה!",
    "ואימי שתחיה בתוך כולם שומרת על הזכויות שלנו שם.",
    "",
    "גדלתי בין קידוש של ליל שבת מואזין מהמסגד",
    "ופעמוני כנסייה, הכל הצטלצל באוויר של ילדותי.",
    "מדי שבוע שמעתי את אבי בקריאה בתורה פיוטים...",
    "או אלתור על דרבוקה של אימי שתחיה ודודה של אבי זכרם לברכה.",
    "שמעתי עברית צרפתית ספרדית יידיש ערבית מרוקאית",
    "אנגלית. וכל זה השפיע הרבה טובה.",
    "מאורעות החיים הרשמים",
    "הכל נכתב נחתם!",
    "משפיע על הנשמה על הרוח...",
    "",
    "מגיע היום הפקק נפתח",
    "ויש צורך לעכל לבטא וליצור..",
    "",
    "כולנו בדרך 🩷",
  ],
  description: [
    "מתמחה בטיפול משולב תנועה מגע תזונה ורגש. מטפלת בשיטת אלבאום, מטפלת בקשיי תיפקוד פיזי וריגשי, בעיות קשב וריכוז ולמידה, ילדים ומבוגרים. טיפול זוגי, יחיד, פסיכותרפיה חסידית, טיפול בתנועה ומגע - פילאטיס, יוגה, ביילא פיטנס דנס, שיעורי מחול לנשים נערות וילדות.",

    "אהלן עולם! רוצה לחצות אותך, להגיע אל לב כולם, שישמעו, שיקשיבו, שידעו שזה בסדר להתבטא ולא לחתום שהכול טוב או רע. יש דרך ויש לה המון ערך. כותבת חיים מלשמוע על אחרים, כותבת כי בעצמי חוצה אוקיינוסים כל רגע וגם בין רגע לרגע. מלחינה, שרה ויש לי כבר כמה שירים בערוצים כמו יוטיוב, אפל, ספוטיפיי ועוד.",

    "גדלתי בשכונת מורשה מוסררה בירושלים. קמתי ונעמדתי על הרגליים והיום זו שכונת יוקרה, המחירים שברו את התקרה. התושבים התחלפו מקיבוץ גלויות לברסלברים מלא ילדים והשכונה מחדש קמה לתחיה! ואימי בתוך כולם שומרת על הזכויות שלנו שם. גדלתי בין קידוש של ליל שבת, מואזין מהמסגד ופעמוני כנסייה. הכל הצטלצל ביחד כשמדי פעם שמעתי קריאה בתורה פיוט או אלתור על דרבוקה של אימי שתחיה ודודה של אבי זיכרם לברכה. שמעתי עברית, צרפתית, ספרדית, יידיש, ערבית מרוקאית, אנגלית. וכל זה השפיע הרבה טובה.",

    "מוזמנים לחפש את שיריי: 'חרות' - זכותנו על הארץ, אימא אדמה, מולדת שלנו! 'מה זו אהבה' - הפער בין תחילת הדרך לדרך, התיסכול והייאוש. 'עליות ומורדות' - בחיי זוג. 'עמוק בתוך ליבך' - שפה מחברת, מעוררת את הלב, יכולה לרפא הרבה מאוד כאב ולקרב. 'לו הייתי ציפור' - כולנו זקוקים ליד שתנחה אותנו לחוף מבטחים. אם אהבתם, מוזמנים להגיב.",
  ],
};

export const creatorDesc =
  "A person dedicated to crafting tobacco purses and cases is passionate about combining functionality with timeless design. They pay close attention to details, ensuring each product is expertly crafted using high-quality materials like leather or wood. Balancing tradition and innovation, they create practical, durable cases that reflect both style and purpose. Their commitment to craftsmanship ensures every piece is not only aesthetically pleasing but also built to last, meeting the needs of tobacco enthusiasts with elegance and precision. Through their work, they offer unique, personalized products that embody both form and function.";
