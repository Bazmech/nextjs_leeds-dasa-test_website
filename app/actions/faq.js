"use server";

export async function submitQuestion(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const question = formData.get("question");
  const page = formData.get("page");

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // TODO: Implement actual question handling (e.g., send email, save to database)
  console.log("Question submitted:", { name, email, question, page });

  return true;
}
