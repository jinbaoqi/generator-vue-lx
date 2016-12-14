/**
 * Created by guojian on 16/12/14.
 */
import * as types from './mutation-type'

export const setTestStr = ({commit},data) => {
    commit(types.SETTEST,data);
};
