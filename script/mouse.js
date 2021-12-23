class Mouse extends Aminal{
  // Lớp Chuột chưa cần thiết phải có thêm thuộc tính, phương thức so với Động vật
    constructor(name, weight, speed) {
        // gọi đến constructor của lớp cha
        super('mouse', name, weight, speed);
    }
}