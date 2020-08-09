import Gravatar from "../../utils/gravatar";

test("Gravatar function test", () => {
  const email = "guissmejia@gmail.com";
  const gravatarUrl =
    "https://gravatar.com/avatar/bae17a625b3f60e75b9e7ec2af2f6175";
  expect(gravatarUrl).toEqual(Gravatar(email));
});

