import "server-only";

export const getByEmail = `
query GetUserByEmail($email: String!) {
  getUserByEmail(email: $email) {
    _id,
    email,
    phoneNumber,
    password,
    name,
    image,
    createdAt,
    updatedAt,
    username,
  }
}
`;
