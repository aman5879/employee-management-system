import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload();
  }

  return (
    <div className="flex justify-between items-center p-5 rounded-2xl">

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          className="w-16 h-16 rounded-full border-2 border-red-500"
        />
        <h3 className="text-lg tracking-wide text-gray-200">
          Hello <br />
          <span className="text-3xl font-bold tracking-wider text-white">
            {props.data.firstName}👋
          </span>
        </h3>
      </div>

      <button onClick={logOutUser}
        className="py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 rounded-full text-sm font-semibold tracking-wide text-white shadow-lg hover:shadow-red-500/50 active:scale-95 transition-all duration-300">
        Log Out
      </button>

    </div>
  )
}

export default Header
