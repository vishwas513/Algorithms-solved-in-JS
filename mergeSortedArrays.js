var merge = function(nums1, nums2) {
    

        var result = [];
        var i =0,j =0;
        var m = nums1.length;
        var n = nums2.length;
        while(i < m && j < n){
            console.log(i,j, nums1[i],nums2[j]);
            if(nums1[i] < nums2[j]){
                //con
                result.push(nums1[i]);
                i++;
            }else if(nums1[i] > nums2[j]){
                     
                result.push(nums2[j]);     
                j++;        
                     
            }
            
            
            
        }
    
    
    if(i >= nums1.length && j < nums2.length){
            
        while(j < nums2.length){
        
            result.push(nums2[j]);    
            j++;
        }
    
    }else if(i < nums1.length && j >= nums2.length){
    
        while(i < nums1.length){
        
            result.push(nums1[i]);    
            i++;
        }
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    console.log(result);
    
    
};

merge([1,3,5,7],[2,4,6,8]);

