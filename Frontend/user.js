const BASE_URL = "http://localhost:8000";
window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
    const userDOM = document.getElementById("user");
    let htmlData = '<div>';
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];
        let firstname = user.firstname || user.first_name || '';
        let lastname = user.lastname || user.last_name || '';
        let id = user.id || user.ID || '';
        htmlData += `<div>
        ${id} ${firstname} ${lastname}
        <a href="index.html?id=${id}"><button>Edit</button></a>
        <button class='delete' data-id='${id}'>Delete</button>
    </div>`;
    }
    htmlData += '</div>';
    userDOM.innerHTML = htmlData;

    const deleteDOMs = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener("click", async (event) => {
            // ดึง id ของ user ที่ต้องการลบจาก data-id attribute
            const id = event.target.dataset.id;
            try{
                //delete user in http://localhost:8000/users/:id
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData(); // โหลดข้อมูลใหม่หลังจากลบสำเร็จ
            }catch(error){
                console.error("Error deleting user:", error);
            }    
        });
    }
}
