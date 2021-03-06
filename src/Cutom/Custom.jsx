import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setGameRules} from "../redux/gameReducer";
import withRedirectHoc from "../RedirectHoc/withRedirectCustom";
import s from '../Cutom/Custom.module.css'


const Custom = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setGameRules((2 * data.Count + 1), parseInt(data.Max), (data.isUserFirst == 'true')))
    }

    return (
        <div className={s.wrapper}>
            <form className={s.form_wrapper} onSubmit={handleSubmit(onSubmit)}>
                {errors.Max && <div className={s.warning}>Please fill in correct max take matches</div>}
                {errors.Count && <div className={s.warning}>Please fill in correct count of matches</div>}
                <div>
                    Count of Matches (2n + 1):
                    <div>
                        <input className={s.inputField}
                               type="number"
                               id={'Count'}
                               {...register('Count', {required: true, min: 0, minLength: 0})}
                               placeholder={'n'}
                        />
                    </div>
                </div>
                <div>
                    Max take matches: (from 1 to m)
                    <div>
                        <input className={s.inputField}
                               type="number"
                               id={'Max'}
                               {...register('Max', {
                                   required: true,
                                   min: 0,
                                   minLength: 0
                               })}
                               placeholder={'m:'}
                        />
                    </div>
                </div>
                <div>
                    {<select className={s.inputField} name="game" {...register('isUserFirst')}>
                        <option value={true}>Player</option>
                        <option value={false}>Computer</option>
                    </select>}
                </div>
                <div>
                    <button className={'btn'}>Play</button>
                </div>
            </form>
        </div>
    )
}


export default withRedirectHoc(Custom)

