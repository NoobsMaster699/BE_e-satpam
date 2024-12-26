class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    const { name, email } = data;
    // Validasi atau logika bisnis lainnya dapat ditambahkan di sini
    const user = { name, email };
    return await this.userRepository.create(user);
  }
}

export default CreateUser;
