import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const FoodItemMenu = ({ food, setSelection }) => {
    const [amount, setAmount] = useState('');
    console.log('id_food:', food.id ,'name:', food.name, amount, "measure", 'Portion', food.calories)
    const handleAmountChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= 1000) {
            setAmount(value);
        }
    };

    return (
        <div key={food.id_Food} className="flex flex-row items-center justify-between font-quicksand bg-white/60 p-2 rounded-lg mb-2">
            <div className="flex flex-row justify-start items-center">
                <FontAwesomeIcon 
                    onClick={() => setSelection({ id_food: food.id, name: food.name, amount, measure: 'Portion' })} 
                    icon={faCirclePlus} 
                    className="text-xl sm:text-3xl text-darkGray mx-1 hover:text-healthyDarkGray1 hover:cursor-pointer" 
                />
                <p className="font-bold text-sm sm:text-lg text-darkGray px-2">{food.name}</p>
            </div>
            <div className="flex flex-row items-center justify-end">
                <div className='flex items-center justify-end max-w-[40px]'>
                
                    <input 
                        className="font-quicksand text-black text-xs sm:text-md w-16 text-right outline-none border px-1 py-1 rounded-md bg-gray-100 mr-2" 
                        placeholder="000" 
                        type="number" 
                        value={amount} 
                        onChange={handleAmountChange} 
                    />
                </div>
                <div className='flex items-center justify-start w-[60px]'>
                    <p className='text-xs sm:text-md text-black'>{food.calories} kcal</p>
                </div>
            </div>
        </div>
    );
}

export default FoodItemMenu;