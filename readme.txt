  const createSlug = (id, name, city) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    const formattedCity = city.toLowerCase().replace(/\s+/g, "-");
    return `${id}-${formattedName}-${formattedCity}`;
  };

  <Link
            key={college.id}
            href={`/colleges/${createSlug(
              college.id,
              college.name,
              college.address.city
            )}`}
            className="p-4 border border-gray-300 rounded-lg hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{college.name}</h2>
            <p className="text-gray-500">{college.address.city}</p>
          </Link>

          //to redirect with custom url college name