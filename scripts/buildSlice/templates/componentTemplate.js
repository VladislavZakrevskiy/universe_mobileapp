const interfaceConst = 'interface';

module.exports = (componentName) => `import { memo } from 'react';
import { View } from 'react-native'

${interfaceConst} ${componentName}Props {

}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const {  } = props;
    
    return (
        <View>
            
        </View>
    );
});`;