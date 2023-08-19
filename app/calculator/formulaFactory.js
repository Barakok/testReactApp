import MifflinSanJeor from './formulas/mifflinSanJeor';
import HarrisBenedict from './formulas/harrisBenedict';

export default function formulaFactory(formulaType) {
    switch (formulaType) {
        case 'MifflinSanJeor':
            return MifflinSanJeor;
        case 'HarrisBenedict':
            return HarrisBenedict;
    }
}




























