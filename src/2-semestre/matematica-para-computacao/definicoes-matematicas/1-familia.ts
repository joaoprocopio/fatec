// Efetue uma definição, através de enumeração, de todos os membros da sua família, considerando apenas parentesco direto de pais, irmãos e filhos.

// Primeira resolução, criando uma enumeração para cada membro da família.
enum Mother {
  name = "Tomoko Higashikata",
  age = 37
}

enum Father {
  name = "Joseph Joestar",
  age = 79
}

enum Son {
  name = "Josuke Higashikata",
  age = 16
}

enum Daughter {
  name = "Shizuka Joestar",
  age = 0.5
}

// Segunda resolução, criando uma enumeração para toda a família, com todos os membros.
enum Family {
  mother = "Tomoko Higashikata",
  father = "Joseph Joestar",
  son = "Josuke Higashikata",
  daughter = "Shizuka Joestar"
}
