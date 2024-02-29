"use client"
import { useState } from 'react';
import { addDinoToGroup } from './actions';

export default function Modal({ grups, dino }: any) {
  const [showModal, setShowModal] = useState(true);
  const [toast, setToast] = useState(true);
  const [error, setError] = useState("");

  const addDinoToGroupClient = async (FormData: any) => {
    const nomGrup = FormData.get("nomGrup")
    await addDinoToGroup(nomGrup, dino.codi_random).then((res) => {
      if (res.status > 200 && res.status < 300) {
        setShowModal(false)
      } else {
        setError("Aquest grup ja ha enregistrat aquest dinosaure")
      }
    });
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Dinosaure trobat!
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form action={addDinoToGroupClient}>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-black text-lg leading-relaxed">
                      A continuació, selecciona el grup al que vols afegir aquest dinosaure.
                    </p>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Grup
                      </label>
                      <div className="relative">
                        <select id="nomGrup" name="nomGrup" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                          {grups.map((grup: any) => <option key={grup.nom} value={grup.nom}>{grup.nom}</option>)}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                      <span className="text-red-500 text-xs italic">{error}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Afegeix
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : <>
        {toast &&
          <div className="absolute bottom-0 start-1/2 -translate-x-1/2">
            <div id="dismiss-toast" className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
              <div className="flex p-4">
                <svg className="mr-3 flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="mr-3 text-sm font-bold text-gray-700 dark:text-gray-400">
                  Registrat
                </p>

                <div className="ms-auto">
                  <button type="button" onClick={() => setToast(false)} className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white" data-hs-remove-element="#dismiss-toast">
                    <span className="sr-only">Close</span>
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>
                </div>
              </div>
            </div></div>
        }
      </>}
    </>
  );
}