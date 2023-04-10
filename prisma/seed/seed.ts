import { PrismaClient, Category, PackagingMaterial } from "@prisma/client";
import { faker } from "@faker-js/faker";

const db = new PrismaClient();

const packageSizes = ["Individual", "Small", "Medium", "Large", "Family Size"];
const foodUnits = ["g", "kg", "oz"];

const getRandomInt = (max: number, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const clearDb = async () => {
  await db.package.count().then(async (count) => {
    if (count > 1) {
      await db.food.deleteMany();
      await db.image.deleteMany();
      await db.package.deleteMany();
    }
  });
};

const createPackage = async (x: number) => {
  const category = Object.values(Category);
  const packagingMaterial = Object.values(PackagingMaterial);

  for (let i = 0; i < x; i++) {
    const randomPackagingName = faker.commerce.productName();
    const randomPackagingPrice = faker.commerce.price();
    const randomPackagingDescription = faker.commerce.productDescription();
    const randomFoodName = faker.commerce.productName();
    const randomCategory = category[getRandomInt(category.length)];
    const randomPackagingMaterial =
      packagingMaterial[getRandomInt(packagingMaterial.length)];

    let randomCapacity;
    const unit = foodUnits[Math.floor(Math.random() * foodUnits.length)];

    switch (unit) {
      case "g":
        randomCapacity = faker.datatype.number({
          min: 50,
          max: 1000,
          precision: 1, // precision of the weight value (e.g. 0.1, 1)
        });
        break;
      case "kg":
        randomCapacity = faker.datatype.number({
          min: 0.05,
          max: 10,
          precision: 0.01, // precision of the weight value (e.g. 0.1, 1)
        });
        break;
      case "oz":
        randomCapacity = faker.datatype.number({
          min: 1,
          max: 67,
          precision: 0.1, // precision of the weight value (e.g. 0.1, 1)
        });
        break;
    }

    const randomPackageSize =
      packageSizes[Math.floor(Math.random() * packageSizes.length)];

    await db.package.create({
      data: {
        capacity: `${randomCapacity} ${unit}`,
        description: randomPackagingDescription,
        name: randomPackagingName,
        price: parseFloat(randomPackagingPrice),
        size: randomPackageSize,
        category: randomCategory,
        materials: randomPackagingMaterial,
        food: {
          create: {
            category: randomCategory,
            name: randomFoodName,
          },
        },
      },
    });
  }
};

clearDb()
  .then(() => createPackage(30))
  .catch((err) => console.log(err));
