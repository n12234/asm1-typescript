import '../App.css';

const ProfilePage = () => {
    return (
        <div id="profile">
      <img
        className='face1'
        src="https://inkythuatso.com/uploads/thumbnails/800/2022/07/tranh-phong-canh-doi-nui-dep-2-inkythuatso-22-09-53-09.jpg"
        alt="Ảnh đại diện"
      />
      <img className='face' src="https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png" alt="" />
      <h1>Ngô Văn Nhất</h1>
      <p>Tuổi: 21</p>
      <p>Quê quán: Ninh Bình</p>
      <p>Định hướng: Lập trình viên</p>
      <div id="languages">
        <p>Ngôn ngữ đã học:</p>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
    )
}

export default ProfilePage