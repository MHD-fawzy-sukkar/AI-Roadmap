export const ibmAr = {
  "heroBadge": "IBM Professional Curriculum",
  "heroTitle": "مسار شهادة IBM المهنية لهندسة الذكاء الاصطناعي (13 كورس)",
  "heroSubtitle": "المنهاج المتكامل لشهادة IBM AI Engineering Professional Certificate مع المرحلة التأسيسية ومشاريع التخرج العملية",
  "pdfBtnText": "تصدير PDF",
  "trackLabel": "اختر المسار:",
  "projectBtnText": "المشاريع والتطبيقات المرحلية لهذه المرحلة",
  "projectNote": "تنبيه: وقت تنفيذ هذه المشاريع مستقل تماماً وليس ضمن الساعات المحددة للكورس.",
  "bannerImg": "./assets/images/IBM_Roadmap.png",
  "specialization": {
    "title": "الرابط المباشر للشهادة المهنية الشاملة على Coursera:",
    "url": "https://www.coursera.org/professional-certificates/ai-engineer"
  },
  "stages": [
    {
      "id": "ibm-step-0",
      "title": "0. Python for Data Science (Prerequisite)",
      "badge": "المرحلة التأسيسية",
      "duration": "متطلب أساسي",
      "items": [
        {
          "label": "المصدر والرابط",
          "text": "Kaggle Learn (<a href='https://www.kaggle.com/learn/python' target='_blank'>Python</a> | <a href='https://www.kaggle.com/learn/pandas' target='_blank'>Pandas</a> | <a href='https://www.kaggle.com/learn/data-visualization' target='_blank'>Visualization</a> | <a href='https://www.kaggle.com/learn/data-cleaning' target='_blank'>Cleaning</a>) وتوثيق NumPy."
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Python, NumPy, Pandas, Matplotlib, Seaborn."
        },
        {
          "label": "المحاور والوحدات",
          "text": "إتقان بنى البيانات المتقدمة في بايثون، مصفوفات وعمليات NumPy، معالجة وتصفية جداول البيانات عبر Pandas، والتمثيل البياني."
        },
        {
          "label": "المخرجات",
          "text": "امتلاك الجاهزية البرمجية التامة لتحميل وتنظيف وتحليل البيانات قبل البدء بكورسات التخصص."
        }
      ],
      "project": {
        "title": "المرحلة 0 — تحليل بيانات استكشافي (EDA)",
        "task": "اختار بيانات واقعية، افهم الأعمدة، عالج القيم الناقصة والتكرار، واستخرج ملاحظات مدعومة برسوم بيانية توضيحية.",
        "source": "Kaggle Datasets (اقتراح محدد: <a href='https://www.kaggle.com/datasets/spscientist/students-performance-in-exams' target='_blank'>Students Performance in Exams</a>).",
        "deliverable": "Notebook يحتوي على تنظيف البيانات، تحليلها، رسوم بيانية مناسبة، وملخص بأهم الاستنتاجات (بدون بناء نماذج تنبؤ في هذه المرحلة)."
      }
    },
    {
      "id": "ibm-step-1",
      "title": "1. Machine Learning with Python",
      "badge": "Course 1 / 13",
      "duration": "20 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/learn/machine-learning-with-python' target='_blank'>https://www.coursera.org/learn/machine-learning-with-python</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Scikit-learn, SciPy, Pandas, NumPy."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Supervised vs. Unsupervised Learning fundamentals.<br>• Regression: Simple, Multiple & Non-linear Regression, Model Evaluation (MSE, R²).<br>• Classification: KNN, Decision Trees, Logistic Regression, Support Vector Machines (SVM).<br>• Clustering: k-Means, Hierarchical Clustering, DBSCAN.<br>• Recommender Systems: Content-based & Collaborative Filtering."
        },
        {
          "label": "المخرجات",
          "text": "بناء وتدريب وتقييم نماذج تعلم الآلة التقليدية وبناء أنظمة التوصية والتصنيف والتجميع."
        }
      ],
      "project": {
        "title": "المرحلة 1 — Machine Learning على بيانات جدولية",
        "task": "<strong>المشروع الرئيسي:</strong> التنبؤ بنجاة ركاب Titanic (<a href='https://www.kaggle.com/c/titanic' target='_blank'>Titanic – Machine Learning from Disaster</a>).<br>المطلوب: توقّع نجاة الراكب باستخدام معلومات مثل العمر والجنس ودرجة التذكرة، وتجربة عدة نماذج ومقارنة أدائها وتجهيز ملف التوقعات.<br><br><strong>مشروع جزئي إضافي:</strong> التنبؤ بأسعار المنازل (<a href='https://www.kaggle.com/c/house-prices-advanced-regression-techniques' target='_blank'>House Prices – Advanced Regression Techniques</a>) بتجربة نماذج الانحدار ومعالجة البيانات ومقارنة نسبة الخطأ.",
        "source": "Kaggle Competitions (Titanic & House Prices)",
        "deliverable": "Notebook يحتوي على معالجة البيانات وبناء النماذج ومقارنة دقتها وملف الـ submission النهائي."
      }
    },
    {
      "id": "ibm-step-2",
      "title": "2. Introduction to Deep Learning & Neural Networks with Keras",
      "badge": "Course 2 / 13",
      "duration": "10 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/learn/introduction-to-deep-learning-with-keras' target='_blank'>https://www.coursera.org/learn/introduction-to-deep-learning-with-keras</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Keras, TensorFlow, Python."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Foundations of Deep Learning & Artificial Neurons.<br>• Activation Functions (ReLU, Sigmoid, Softmax) & Forward Propagation.<br>• Backpropagation & Gradient Descent optimization.<br>• Building and compiling Sequential Neural Networks using Keras.<br>• Architectural overview: CNNs, RNNs & Autoencoders."
        },
        {
          "label": "المخرجات",
          "text": "فهم بنية الخلايا العصبية الاصطناعية وبناء أول شبكة عصبونية عميقة وتدريبها باستخدام واجهة Keras."
        }
      ],
      "project": {
        "title": "المرحلة 2 — Neural Networks باستخدام Keras",
        "task": "استخدم نفس بيانات Titanic التي اشتغلت عليها بمرحلة الـ ML، وابنِ شبكة عصبية MLP صغيرة عبر Keras، وقارن أداءها مع أفضل نموذج من المرحلة السابقة لتحديد ما إذا كانت الشبكة قد حسّنت النتيجة.",
        "source": "Kaggle Titanic Competition Dataset",
        "deliverable": "كود Keras لتدريب الشبكة ومقارنة نقدية دقيقة للنتائج مع نماذج Scikit-learn."
      }
    },
    {
      "id": "ibm-step-3",
      "title": "3. Deep Learning with Keras and TensorFlow",
      "badge": "Course 3 / 13",
      "duration": "23 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "TensorFlow 2.x, Keras, TensorBoard."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• TensorFlow computational graphs, low-level operations & Keras integration.<br>• Convolutional Neural Networks (CNNs): Feature extraction, Convolution & Pooling layers.<br>• Recurrent Neural Networks (RNNs) & LSTMs for time series and NLP.<br>• Unsupervised architectures: Autoencoders & Restricted Boltzmann Machines (RBMs)."
        },
        {
          "label": "المخرجات",
          "text": "بناء معماريات CNN لمعالجة الصور وشبكات RNN/LSTM للسلاسل الزمنية وفهم النماذج غير الخاضعة للإشراف."
        }
      ],
      "project": {
        "title": "المرحلة 3 — CNN باستخدام TensorFlow/Keras",
        "task": "درّب شبكة CNN تميّز بين صور القطط والكلاب. اعرض نتائج التقييم، وأمثلة صور أخطأ النموذج فيها، واختبره على صور خارجية جديدة.",
        "source": "Dataset: <a href='https://www.kaggle.com/datasets/tongdn/cat-and-dog' target='_blank'>Cats and Dogs Image Classification</a> (أو تحدي <a href='https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition' target='_blank'>Dogs vs. Cats Redux</a> للبيانات الأكبر).",
        "deliverable": "Notebook لتدريب الـ CNN مع تحليل الأخطاء ومصفوفة الارتباك واختبار صورة خارجية."
      }
    },
    {
      "id": "ibm-step-4",
      "title": "4. Introduction to Neural Networks and PyTorch",
      "badge": "Course 4 / 13",
      "duration": "19 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "PyTorch (torch, torch.nn, torch.optim, Autograd)."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• PyTorch Tensors manipulation & Automatic Differentiation (Autograd).<br>• Implementing Linear and Logistic Regression from scratch in PyTorch.<br>• Deep Neural Network (DNN) architectures with torch.nn.<br>• Loss functions, optimization routines (torch.optim), and Regularization (Dropout)."
        },
        {
          "label": "المخرجات",
          "text": "إتقان التلاعب بالـ Tensors وبناء نماذج الانحدار والشبكات العصبونية العميقة المخصصة من الصفر في PyTorch."
        }
      ],
      "project": {
        "title": "المرحلة 4 — إعادة تطبيق Neural Network باستخدام PyTorch",
        "task": "أعد تنفيذ شبكة Titanic الخاصة بالمرحلة 2 باستخدام PyTorch بالكامل مع بناء Dataset و DataLoader و Training Loop مخصص، وقارن النتيجة مع نسخة Keras.",
        "source": "Titanic Competition Dataset",
        "deliverable": "كود PyTorch يعمل بالكامل مع ملخص مقارنة بين أسلوب Keras و PyTorch."
      }
    },
    {
      "id": "ibm-step-5",
      "title": "5. Deep Learning with PyTorch",
      "badge": "Course 5 / 13",
      "duration": "21 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "PyTorch, torchvision, CUDA / GPU."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Advanced Computer Vision pipelines with CNNs & torchvision.<br>• Transfer Learning & fine-tuning pre-trained models (ResNet, VGG).<br>• Sequential modeling with PyTorch LSTMs & GRUs.<br>• Model evaluation, checkpointing, saving, and deployment best practices."
        },
        {
          "label": "المخرجات",
          "text": "تطبيق التعلم بنقل المعرفة (Transfer Learning) على أحدث شبكات الرؤية الحاسوبية وحفظ واسترجاع نقاط الفحص للنماذج."
        }
      ],
      "project": {
        "title": "المرحلة 5 — Transfer Learning باستخدام PyTorch",
        "task": "استخدم نفس Dataset صور القطط والكلاب، وقارن بين: 1) شبكة CNN مبنية من الصفر، 2) التعلم بنقل المعرفة (Transfer Learning) مع تجميد أغلب الطبقات، 3) Fine-tuning محدود.",
        "source": "Cats and Dogs Dataset",
        "deliverable": "مقارنة دقيقة للأداء وسرعة التقارب وحفظ النموذج المدرب واختباره على صور جديدة."
      }
    },
    {
      "id": "ibm-step-6",
      "title": "6. AI Capstone Project with Deep Learning",
      "badge": "Course 6 / 13",
      "duration": "15 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/learn/ai-capstone-project-with-deep-learning' target='_blank'>https://www.coursera.org/learn/ai-capstone-project-with-deep-learning</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "PyTorch / Keras, ResNet-18, Computer Vision Pipeline."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• End-to-End deep learning pipeline: Concrete Crack Detection & Classification.<br>• Large-scale image data preprocessing, transformation, and augmentation.<br>• Training custom CNNs vs. Pre-trained ResNet-18 architectures.<br>• Rigorous metric evaluation (Precision, Recall, ROC-AUC) & final project reporting."
        },
        {
          "label": "المخرجات",
          "text": "بناء مشروع تخرج عملي متكامل لتصنيف التشققات الخرسانية باستخدام التعلم العميق ونشر تقرير التقييم النهائي."
        }
      ],
      "project": {
        "title": "المرحلة 6 — Computer Vision Capstone",
        "task": "تصنيف صور بموضوع واقعي ومختلف لإثبات نقل المهارة لمشكلة جديدة. ابنِ خط أساس (Baseline)، ثم طبّق CNN و Transfer Learning وقيّم الأداء بدقة وحلّل الأخطاء.",
        "source": "Kaggle Dataset (خيار مقترح: <a href='https://www.kaggle.com/datasets/puneet6060/intel-image-classification' target='_blank'>Intel Image Classification</a>).",
        "deliverable": "مشروع كامل على GitHub مع ملف README مفصل يشرح المشكلة وهندسة البيانات والنتائج ومقاييس التقييم."
      }
    },
    {
      "id": "ibm-step-7",
      "title": "7. Generative AI and LLMs: Architecture and Data Preparation",
      "badge": "Course 7 / 13",
      "duration": "6 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Tokenizers (BPE, WordPiece), Vector Embeddings, Preprocessing Pipelines."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Generative vs. Discriminative AI paradigms.<br>• Evolution and core foundations of Large Language Models (LLMs).<br>• Tokenization strategies (BPE, WordPiece) & vector embeddings.<br>• Dataset collection, sanitation, and preprocessing pipelines for Generative models."
        },
        {
          "label": "المخرجات",
          "text": "فهم المعمارية الرياضية للنماذج التوليدية وتجهيز وتنظيف مجموعات البيانات الضخمة لتدريب نماذج اللغة."
        }
      ],
      "project": {
        "title": "المرحلة 7 — تجهيز ومعالجة بيانات الـ NLP",
        "task": "افحص بيانات مراجعات النصوص، عالج التكرار والنصوص الفارغة، وطبّق تقنيات الـ Tokenization وبناء المفردات وتجهيز البيانات النظيفة لمهمة تحليل المشاعر.",
        "source": "Dataset: <a href='https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews' target='_blank'>IMDb Dataset of 50K Movie Reviews</a>.",
        "deliverable": "Dataset مجهزة ومنظفة ومحفوظة بصيغة معيارية مع توثيق كامل لخطوات الـ Tokenization والتجهيز."
      }
    },
    {
      "id": "ibm-step-8",
      "title": "8. Gen AI Foundational Models for NLP & Language",
      "badge": "Course 8 / 13",
      "duration": "10 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Foundation Models, Hugging Face Hub, Evaluation Benchmarks."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Evolution of NLP architectures & Pre-trained Foundation Models.<br>• Semantic embeddings and context comprehension.<br>• Downstream task execution: Summarization, Sentiment Analysis, Text Classification.<br>• Benchmarking and qualitative evaluation of language models."
        },
        {
          "label": "المخرجات",
          "text": "توظيف النماذج التأسيسية لتنفيذ مهام التلخيص وتحليل المشاعر وتصنيف النصوص وتقييم دقة النماذج."
        }
      ],
      "project": {
        "title": "المرحلة 8 — مقارنة نماذج تصنيف النصوص (Sentiment Analysis)",
        "task": "صنّف مراجعات النصوص إلى إيجابية وسلبية. ابدأ بخط أساس (TF-IDF + ML Model)، ثم جرّب تمثيلاً نصياً عميقاً (Word Embeddings / LSTM) وقارن النتائج على نفس تقسيم البيانات.",
        "source": "IMDb Movie Reviews Dataset (أو تحدي <a href='https://www.kaggle.com/c/sentiment-analysis-on-movie-reviews' target='_blank'>Sentiment Analysis on Movie Reviews</a>).",
        "deliverable": "تقرير مقارنة شامل للنتائج مع أمثلة فعلية للحالات التي أخفق كل نموذج في تصنيفها."
      }
    },
    {
      "id": "ibm-step-9",
      "title": "9. Generative AI Language Modeling with Transformers",
      "badge": "Course 9 / 13",
      "duration": "9 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Transformers (BERT, GPT, T5), Self-Attention Mechanisms."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Transformer architecture deep dive: Encoder-Decoder mechanism.<br>• Self-Attention, Multi-Head Attention, Scaled Dot-Product Attention.<br>• Positional Encodings & Attention Masking techniques.<br>• Comparative study: Encoder-only (BERT), Decoder-only (GPT), Sequence-to-Sequence (T5)."
        },
        {
          "label": "المخرجات",
          "text": "فهم عميق وتطبيقي لمعمارية المحولات وآلية الانتباه والمقارنة بين نماذج التوليد والتمثيل."
        }
      ],
      "project": {
        "title": "المرحلة 9 — تطبيق Transformer جاهز للاستدلال",
        "task": "استخدم نموذج Transformer مدرباً مسبقاً (مثل DistilBERT / RoBERTa) عبر Hugging Face لتصنيف مراجعات النصوص، واختبره على نصوص واضحة وملتبسة وسجّل الحالات التي أخفق فيها.",
        "source": "IMDb Dataset / Hugging Face Hub",
        "deliverable": "Notebook استدلال عملي يوثق حالات الاختبار والتحليل الدلالي لمخرجات النموذج."
      }
    },
    {
      "id": "ibm-step-10",
      "title": "10. Generative AI Engineering and Fine-Tuning Transformers",
      "badge": "Course 10 / 13",
      "duration": "8 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "Hugging Face Transformers, Prompt Engineering (CoT), BLEU / ROUGE."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Advanced Prompt Engineering: Few-Shot, Zero-Shot, Chain-of-Thought (CoT).<br>• Fine-tuning Transformer architectures via Hugging Face (transformers library).<br>• Domain specialization & task-specific adaptation.<br>• Text generation metrics: BLEU, ROUGE, and Perplexity."
        },
        {
          "label": "المخرجات",
          "text": "إتقان هندسة التعليمات المتقدمة وضبط وتخصيص نماذج المحولات لمهام ومجالات تخصصية محددة."
        }
      ],
      "project": {
        "title": "المرحلة 10 — Fine-tuning لنماذج المحولات",
        "task": "خذ نموذج Transformer جاهزاً وسجّل أداءه قبل التدريب، ثم طبّق Fine-tuning كامل على بيانات IMDb وقارن تحسن الدقة ومقاييس التقييم على مجموعة اختبار منفصلة.",
        "source": "IMDb Dataset & Hugging Face Trainer API",
        "deliverable": "تقرير مقارنة قبل/بعد الضبط الدقيق مع حفظ النموذج ونقاط التحقق (Checkpoints)."
      }
    },
    {
      "id": "ibm-step-11",
      "title": "11. Generative AI Advanced Fine-Tuning for LLMs",
      "badge": "Course 11 / 13",
      "duration": "9 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "PEFT, LoRA, QLoRA, Quantization (4-bit/8-bit), RLHF."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Parameter-Efficient Fine-Tuning (PEFT) methodologies.<br>• LoRA (Low-Rank Adaptation) & QLoRA Implementation for memory/compute optimization.<br>• Quantization techniques (8-bit, 4-bit) for efficient model hosting.<br>• Reinforcement Learning from Human Feedback (RLHF) & Safety/Alignment techniques."
        },
        {
          "label": "المخرجات",
          "text": "تكييف النماذج اللغوية الضخمة على الحواسب العادية باستخدام LoRA و QLoRA وتطبيق محاذاة الأمان."
        }
      ],
      "project": {
        "title": "المرحلة 11 — تطبيق تقنيات LoRA / PEFT",
        "task": "أعد تجربة الضبط الدقيق باستخدام تقنية LoRA بدلاً من التدريب الكامل للنموذج، وقارن النتائج وحجم المعاملات المدربة واستهلاك ذاكرة الـ GPU وزمن التدريب.",
        "source": "IMDb Dataset & Hugging Face PEFT Library",
        "deliverable": "تقرير تجربة يبرز كفاءة LoRA ومقارنة حجم الذاكرة والأداء مقابل الـ Full Fine-Tuning."
      }
    },
    {
      "id": "ibm-step-12",
      "title": "12. Fundamentals of AI Agents Using RAG and LangChain",
      "badge": "Course 12 / 13",
      "duration": "9 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "LangChain, ChromaDB, FAISS, Tools & Function Calling."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Retrieval-Augmented Generation (RAG) architecture and vector retrieval pipeline.<br>• Vector Databases: ChromaDB, FAISS, embeddings storage, and similarity querying.<br>• LangChain ecosystem: Chains, Memory, PromptTemplates, Output Parsers.<br>• Designing Autonomous AI Agents equipped with tools and function calling."
        },
        {
          "label": "المخرجات",
          "text": "بناء خطوط استرجاع RAG وتصميم وكلاء أذكياء (AI Agents) قادرين على استخدام الأدوات وقواعد البيانات."
        }
      ],
      "project": {
        "title": "المرحلة 12 — بناء نموذج أولي لنظام RAG (RAG Prototype)",
        "task": "جهّز مجموعة صغيرة من الوثائق التخصصية، واجعل النظام يسترجع المقاطع المرتبطة بالسؤال ويولّد إجابة دقيقة منها. اختبر أسئلة مغطاة وأسئلة لا تغطيها الوثائق للتأكد من امتناع النظام عن الهلوسة.",
        "source": "مجموعة وثائق من اختيارك (أو استخدام <a href='https://hotpotqa.github.io/' target='_blank'>HotpotQA Dataset</a> كخيار إضافي).",
        "deliverable": "Prototype أولي يعرض الإجابة ومصادر الاسترجاع ويمتنع عن الإجابة عند غياب المعلومة."
      }
    },
    {
      "id": "ibm-step-13",
      "title": "13. Project: Generative AI Applications with RAG and LangChain",
      "badge": "Course 13 / 13 (Capstone)",
      "duration": "9 Hours",
      "items": [
        {
          "label": "المصدر والرابط المباشر",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "الأداة الرئيسية",
          "text": "LangChain, RAG Pipeline, Vector Stores, Gradio / Streamlit."
        },
        {
          "label": "المحاور والوحدات",
          "text": "<br>• Capstone Project: Production-grade End-to-End GenAI Application.<br>• Building a multi-document Question-Answering (QA) bot using LangChain & RAG.<br>• Vector store indexing, retriever tuning, and source citation integration.<br>• Developing and deploying an interactive UI using Gradio / Streamlit."
        },
        {
          "label": "المخرجات",
          "text": "بناء ونشر تطبيق ذكاء اصطناعي توليدي تفاعلي متكامل يجيب على الأسئلة من عدة مستندات بدقة مع واجهة مستخدم."
        }
      ],
      "project": {
        "title": "المرحلة 13 — RAG Final Capstone Project (المساعد المعرفي الشامل)",
        "task": "طوّر مشروع المرحلة 12 لمجال محدد (مواد جامعية، دليل تقني، وثائق متخصصة). اجمع الوثائق ونظّمها، واختبر 20-30 سؤالاً، واجعل النظام يعرض مصادر كل إجابة، وأضف واجهة مستخدم تفاعلية.",
        "source": "وثائق ومستندات المجال التخصصي المختار",
        "deliverable": "تطبيق RAG كامل جاهز للعرض عبر Gradio أو Streamlit مع كود GitHub موثق ومقاييس تقييم لجودة الاسترجاع وعدم الهلوسة."
      }
    }
  ]
};
