#!/usr/bin/env node
// ============================================================
// SCRIPT TẠO LINK MỜI CÁ NHÂN HOÁ
// ============================================================
// Cách dùng:
//   node generate-links.js
//
// Output: danh sách link có thể copy gửi cho khách
// ============================================================

const BASE_URL = 'https://your-wedding-site.vercel.app'; // ← Thay bằng URL thực tế

// Danh sách khách mời
const guests = [
  // Gia đình
  { name: 'Chú Hai', group: 'Gia đình' },
  { name: 'Cô Ba', group: 'Gia đình' },
  { name: 'Bác Năm', group: 'Gia đình' },

  // Bạn bè cô dâu
  { name: 'Lan Anh', group: 'Bạn cô dâu' },
  { name: 'Minh Thu', group: 'Bạn cô dâu' },
  { name: 'Hoa Linh', group: 'Bạn cô dâu' },

  // Bạn bè chú rể
  { name: 'Tuấn Kiệt', group: 'Bạn chú rể' },
  { name: 'Duy Anh', group: 'Bạn chú rể' },
  { name: 'Quốc Bảo', group: 'Bạn chú rể' },

  // Đồng nghiệp
  { name: 'Phòng Kỹ Thuật', group: 'Đồng nghiệp' },
  { name: 'Anh Hùng', group: 'Đồng nghiệp' },
];

console.log('\n🎊 DANH SÁCH LINK MỜI THIỆP CƯỚI\n');
console.log('='.repeat(70));

let currentGroup = '';
guests.forEach((guest, i) => {
  if (guest.group !== currentGroup) {
    currentGroup = guest.group;
    console.log(`\n📌 ${currentGroup.toUpperCase()}`);
    console.log('-'.repeat(50));
  }
  const encodedName = encodeURIComponent(guest.name);
  const link = `${BASE_URL}?guest=${encodedName}`;
  console.log(`${String(i+1).padStart(2,'0')}. ${guest.name.padEnd(20)} → ${link}`);
});

console.log('\n' + '='.repeat(70));
console.log(`\n✅ Tổng: ${guests.length} khách mời`);
console.log('\n💡 Mẹo: Copy link và gửi qua Zalo / Facebook / Messenger\n');

// Export dạng CSV nếu cần
const csv = ['Số thứ tự,Tên khách,Nhóm,Link mời'];
guests.forEach((guest, i) => {
  const link = `${BASE_URL}?guest=${encodeURIComponent(guest.name)}`;
  csv.push(`${i+1},"${guest.name}","${guest.group}","${link}"`);
});

const fs = require('fs');
fs.writeFileSync('guest-links.csv', csv.join('\n'), 'utf8');
console.log('📄 Đã xuất file: guest-links.csv\n');
