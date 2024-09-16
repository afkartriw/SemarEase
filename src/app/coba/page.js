"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

const CalendarDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [startTimeHours, setStartTimeHours] = useState("08");
  const [startTimeMinutes, setStartTimeMinutes] = useState("00");
  const [endTimeHours, setEndTimeHours] = useState("15");
  const [endTimeMinutes, setEndTimeMinutes] = useState("00");
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  // Tambahkan state untuk selectedRoom, selectedBuilding, dan selectedFloor
  const [selectedRoom, setSelectedRoom] = useState("Ruang A101");
  const [selectedBuilding, setSelectedBuilding] = useState("Gedung A");
  const [selectedFloor, setSelectedFloor] = useState("Lantai 1");

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const totalDays = daysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setShowTimeSelector(true);
  };

  const calculateDuration = () => {
    const start = new Date();
    start.setHours(parseInt(startTimeHours), parseInt(startTimeMinutes), 0, 0); // Set start time

    const end = new Date();
    end.setHours(parseInt(endTimeHours), parseInt(endTimeMinutes), 0, 0); // Set end time

    const durationInMinutes = (end - start) / (1000 * 60); // Duration in minutes

    if (durationInMinutes < 0) {
      return "Durasi tidak valid";
    }

    const hours = Math.floor(durationInMinutes / 60);
    const minutes = Math.round(durationInMinutes % 60);

    return `${hours} jam ${minutes} menit`;
  };

  const resetState = () => {
    setSelectedDate(null);
    setShowTimeSelector(false);
    setStartTimeHours("08");
    setStartTimeMinutes("00");
    setEndTimeHours("15");
    setEndTimeMinutes("00");
  };

  const handlePinjam = () => {
    setConfirmationOpen(true);
    setIsOpen(false);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    resetState(); // Reset state ketika dialog ditutup
  };

  return (
    <div>
      {/* Button untuk membuka dialog */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
      >
        Pinjam Ruangan
      </button>

      <Dialog
        open={isOpen}
        onClose={handleCloseDialog} // Menggunakan handleCloseDialog untuk menutup dialog
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto bg-white rounded-lg shadow-lg p-6 max-w-7xl h-auto max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-3 gap-4">
              {/* Kolom Kiri: Informasi Fakultas */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center">
                <div className="w-40 h-30">
                  <img
                    src="/images/kalender.png"
                    alt="Descriptive Text"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-semibold text-blue-600">
                  Pilih Tanggal & Waktu
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Fakultas Keguruan dan Ilmu Pendidikan (FKIP) <br />
                  UNS merupakan fakultas terbesar di
                </p>
              </div>

              {/* Kolom Tengah: Pemilihan Tanggal */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg text-blue-600">
                    Pilih Tanggal & Waktu
                  </h2>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &#x276E;
                  </button>
                  <h3 className="text-lg font-semibold">
                    {months[currentMonth]} {currentYear}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &#x276F;
                  </button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div className="grid grid-cols-7 gap-2 text-center text-gray-700 mb-4">
                    {["SN", "SL", "RB", "KM", "JM", "SB", "MG"].map(
                      (day, idx) => (
                        <div key={idx} className="font-semibold">
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: firstDay }, (_, i) => (
                      <div key={i} className="py-2" />
                    ))}

                    {Array.from({ length: totalDays }, (_, i) => {
                      const day = i + 1;
                      const isDisabled = day < 10 || day > 27;
                      const isSelected = day === selectedDate;

                      return (
                        <button
                          key={i}
                          onClick={() => !isDisabled && handleDateClick(day)}
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled
                              ? "bg-red-200 text-red-400 cursor-not-allowed"
                              : isSelected
                              ? "bg-blue-700 text-blue-600 border-b-4 border-blue-500"
                              : "bg-blue-100 text-blue-600 border-b-4 border-green-500"
                          } rounded-md`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time Selection */}
                  {showTimeSelector && selectedDate && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
                      <h4 className="text-xs text-center font-semibold mb-2 flex items-center justify-center">
                        <span className="flex-grow border-t border-gray-300"></span>
                        <span className="px-2">
                          Pilih Waktu Peminjaman Untuk{" "}
                          <a href="#" className="text-blue-600">
                            {selectedDate} {months[currentMonth]}
                          </a>
                        </span>
                        <span className="flex-grow border-t border-gray-300"></span>
                      </h4>
                      <div className="flex items-center space-x-4 mb-4 justify-center">
                        {/* Waktu Mulai */}
                        <div className="flex flex-col items-center space-y-2">
                          <label className="text-gray-700 text-xs">Mulai</label>
                          <div className="flex items-center space-x-1">
                            <input
                              type="number"
                              value={startTimeHours}
                              onChange={(e) =>
                                setStartTimeHours(e.target.value)
                              }
                              min="0"
                              max="23"
                              className="border border-gray-300 rounded-md p-1 text-xs text-center w-12"
                            />
                            :
                            <input
                              type="number"
                              value={startTimeMinutes}
                              onChange={(e) =>
                                setStartTimeMinutes(e.target.value)
                              }
                              min="0"
                              max="45"
                              step="15"
                              className="border border-gray-300 rounded-md p-1 text-xs text-center w-12"
                            />
                          </div>
                        </div>

                        {/* Waktu Akhir */}
                        <div className="flex flex-col items-center space-y-2">
                          <label className="text-gray-700 text-xs">Akhir</label>
                          <div className="flex items-center space-x-1">
                            <input
                              type="number"
                              value={endTimeHours}
                              onChange={(e) => setEndTimeHours(e.target.value)}
                              min="0"
                              max="23"
                              className="border border-gray-300 rounded-md p-1 text-xs text-center w-12"
                            />
                            :
                            <input
                              type="number"
                              value={endTimeMinutes}
                              onChange={(e) =>
                                setEndTimeMinutes(e.target.value)
                              }
                              min="0"
                              max="45"
                              step="15"
                              className="border border-gray-300 rounded-md p-1 text-xs text-center w-12"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() => setShowTimeSelector(false)}
                          className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300"
                        >
                          Kembali
                        </button>
                        <button
                          onClick={handlePinjam}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        >
                          Pinjam Ruangan
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Kolom Kanan: Ringkasan Peminjaman */}
              <div className="shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg text-blue-600">
                    Ringkasan
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &#x2715;
                  </button>
                </div>
                <div className="bg-gray-100 shadow-sm p-4 rounded-lg mt-16">
                  <div className="bg-gray-100 rounded-lg grid grid-cols-4 gap-4">
                    <div>
                      <div className="font-semibold">RUANGAN</div>
                      <div className="text-blue-600">Ruangan Aula FEB</div>
                    </div>
                    <div className="col-span-2 pl-4">
                      <div className="font-semibold">GEDUNG</div>
                      <div className="text-blue-600">
                        Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div>
                        <div className="font-semibold">LANTAI</div>
                        <div className="text-blue-600">1</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informasi Dinamis Tanggal, Waktu, dan Durasi */}
                {selectedDate && showTimeSelector && (
                  <div className="bg-blue-100 p-4 rounded-lg mt-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-semibold text-blue-600">Tanggal</div>
                      <div className="font-semibold text-blue-600">Waktu</div>
                      <div className="font-semibold text-blue-600">Durasi</div>

                      <div className="text-sm text-blue-600">
                        {selectedDate} {months[currentMonth]} {currentYear}
                      </div>
                      <div className="text-sm text-blue-600">
                        {startTimeHours}:{startTimeMinutes} - {endTimeHours}:
                        {endTimeMinutes}
                      </div>
                      <div className="text-sm text-blue-600">
                        {calculateDuration()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto bg-white rounded-lg shadow-lg p-6 max-w-lg">
            <h3 className="text-lg font-semibold text-center text-blue-600 mb-4">
              Peminjaman Berhasil!
            </h3>
            <p className="text-center text-gray-700 mb-4">
              Ruangan telah berhasil dipinjam pada tanggal {selectedDate}{" "}
              {months[currentMonth]} {currentYear}
              dari pukul {startTimeHours}:{startTimeMinutes} hingga{" "}
              {endTimeHours}:{endTimeMinutes} dengan durasi{" "}
              {calculateDuration()}.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setConfirmationOpen(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Tutup
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CalendarDialog;