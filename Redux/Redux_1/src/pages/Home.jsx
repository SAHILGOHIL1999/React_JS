import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  // Form Data (Controlled Form))

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    country: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const [editingId, setEditingId] = useState(null);

  // Data State

  const [records, setRecords] = useState([]);

  console.log(records);
  

  // UI State

  const [searchTerm, setSearchTerm] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // Load from localStorage on mount

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("crud_users");
      if (saved) setRecords(JSON.parse(saved));
    }
  }, []);

  // Sync to localStorage on records change

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("crud_users", JSON.stringify(records));
    }
  }, [records]);

  // Handle Input Changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Phone must be 10 digits.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingId) {
      setRecords((prev) =>
        prev.map((r) =>
          r.id === editingId ? { ...formData, id: editingId } : r,
        ),
      );
      setEditingId(null);
    } else {
      const newRecord = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toLocaleString(),
      };
      setRecords((prev) => [...prev, newRecord]);
    }

    // Reset Form

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      country: "",
      agreeTerms: false,
    });
    setErrors({});
  };

  const handleEdit = (record) => {
    setFormData(record);
    setEditingId(record.id);
  };

  const handleDelete = (id) => {
    let result = confirm("Are you sure delete this data??")
    if(result){
      setRecords((prev) => prev.filter((r) => r.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex justify-center items-center h-screen">
          <form
            className="w-[500px] mx-auto  bg-blue-300 p-6 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
                value={formData.name}
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
                value={formData.email}
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email address
              </label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
                value={formData.password}
              />
              <label
                htmlFor="floating_password"
                className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required=""
                  onChange={handleChange}
                  value={formData.phone}
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Phone number
                </label>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="gender"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Gender
                  </label>
                </div>
                {["Male", "Female", "Other"].map((g) => {
                  return (
                    <div key={g}>
                      <div className="flex items-center mb-4">
                        <input
                          id="country-option-2"
                          type="radio"
                          name="gender"
                          className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                          onChange={handleChange}
                          value={g}
                          checked = {formData.gender === g}
                        />
                        <label
                          htmlFor="country-option-2"
                          className="select-none ms-2 text-sm font-medium text-heading"
                        >
                          {g}
                        </label>
                      </div>
                    </div>
                  );
                })}

                {errors.gender && (
                  <div className="invalid-feedback">{errors.gender}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Select an option
                </label>
                <select
                  id="country"
                  name="country"
                  className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  onChange={handleChange}
                  value={formData.country}
                >
                  <option defaultValue={"Choose a country"}>
                    Choose a country
                  </option>
                  {
                    ['United States' , 'Canada' , 'France' , 'Germany'].map((c) => <option value={c}>{c}</option>)
                  }
                </select>
                {errors.country && (
                  <div className="invalid-feedback">{errors.country}</div>
                )}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="checkbox-1"
                type="checkbox"
                name="agreeTerms"
                value=""
                name="agreeTerms"
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                onChange={handleChange}
              />
              <label
                htmlFor="checkbox-1"
                className="ms-2 text-sm font-medium text-heading select-none"
              >
                I agree to the{" "}
                <a href="#" className="text-fg-brand hover:underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <div className="mb-4">
              {errors.agreeTerms && (
                <div className="invalid-feedback">{errors.agreeTerms}</div>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Form Data Table with searching , sorting and Pagination */}

        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="bg-neutral-secondary-soft border-b border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Countries
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {records.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center">
                    No records found
                  </td>
                </tr>
              ) : (
                records.map((record) => (
                  <tr
                    key={record.id}
                    className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      {" "}
                      {record.name}{" "}
                    </th>
                    <td className="px-6 py-4"> {record.email} </td>
                    <td className="px-6 py-4"> {record.password} </td>
                    <td className="px-6 py-4"> {record.phone} </td>
                    <td className="px-6 py-4"> {record.gender} </td>
                    <td className="px-6 py-4"> {record.country} </td>
                    <td className="px-6 py-4 flex">
                      <button
                        onClick={() => handleEdit(record)}
                        className="btn me-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        className="btn  block"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
