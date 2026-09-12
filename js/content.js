window.roadmapsData = {
  // ================= 1. IBM AI ENGINEERING SPECIALIZATION TRACK (DEFAULT) =================
  ibm: {
    ar: {
      heroBadge: "IBM Professional Curriculum",
      heroTitle: "مسار شهادة IBM المهنية لهندسة الذكاء الاصطناعي (13 كورس)",
      heroSubtitle: "المنهاج المتكامل لشهادة IBM AI Engineering Professional Certificate مع المرحلة التأسيسية ومشاريع التخرج العملية",
      pdfBtnText: "تصدير PDF",
      trackLabel: "اختر المسار:",
      bannerImg: "./assets/images/IBM_Roadmap.png",
      specialization: {
        title: "الرابط المباشر للشهادة المهنية الشاملة على Coursera:",
        url: "https://www.coursera.org/professional-certificates/ai-engineer"
      },
      stages: [
        {
          id: "ibm-step-0",
          title: "0. Python for Data Science (Prerequisite)",
          badge: "المرحلة التأسيسية",
          duration: "متطلب أساسي",
          items: [
            { label: "المصدر والرابط", text: "Kaggle Learn (<a href='https://www.kaggle.com/learn/python' target='_blank'>Python</a> | <a href='https://www.kaggle.com/learn/pandas' target='_blank'>Pandas</a> | <a href='https://www.kaggle.com/learn/data-visualization' target='_blank'>Visualization</a> | <a href='https://www.kaggle.com/learn/data-cleaning' target='_blank'>Cleaning</a>) وتوثيق NumPy." },
            { label: "الأداة الرئيسية", text: "Python, NumPy, Pandas, Matplotlib, Seaborn." },
            { label: "المحاور والوحدات", text: "إتقان بنى البيانات المتقدمة في بايثون، مصفوفات وعمليات NumPy، معالجة وتصفية جداول البيانات عبر Pandas، والتمثيل البياني." },
            { label: "المخرجات", text: "امتلاك الجاهزية البرمجية التامة لتحميل وتنظيف وتحليل البيانات قبل البدء بكورسات التخصص." }
          ]
        },
        {
          id: "ibm-step-1",
          title: "1. Machine Learning with Python",
          badge: "Course 1 / 13",
          duration: "20 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/learn/machine-learning-with-python' target='_blank'>https://www.coursera.org/learn/machine-learning-with-python</a>" },
            { label: "الأداة الرئيسية", text: "Scikit-learn, SciPy, Pandas, NumPy." },
            { label: "المحاور والوحدات", text: "<br>• Supervised vs. Unsupervised Learning fundamentals.<br>• Regression: Simple, Multiple & Non-linear Regression, Model Evaluation (MSE, R²).<br>• Classification: KNN, Decision Trees, Logistic Regression, Support Vector Machines (SVM).<br>• Clustering: k-Means, Hierarchical Clustering, DBSCAN.<br>• Recommender Systems: Content-based & Collaborative Filtering." },
            { label: "المخرجات", text: "بناء وتدريب وتقييم نماذج تعلم الآلة التقليدية وبناء أنظمة التوصية والتصنيف والتجميع." }
          ]
        },
        {
          id: "ibm-step-2",
          title: "2. Introduction to Deep Learning & Neural Networks with Keras",
          badge: "Course 2 / 13",
          duration: "10 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/learn/introduction-to-deep-learning-with-keras' target='_blank'>https://www.coursera.org/learn/introduction-to-deep-learning-with-keras</a>" },
            { label: "الأداة الرئيسية", text: "Keras, TensorFlow, Python." },
            { label: "المحاور والوحدات", text: "<br>• Foundations of Deep Learning & Artificial Neurons.<br>• Activation Functions (ReLU, Sigmoid, Softmax) & Forward Propagation.<br>• Backpropagation & Gradient Descent optimization.<br>• Building and compiling Sequential Neural Networks using Keras.<br>• Architectural overview: CNNs, RNNs & Autoencoders." },
            { label: "المخرجات", text: "فهم بنية الخلايا العصبية الاصطناعية وبناء أول شبكة عصبونية عميقة وتدريبها باستخدام واجهة Keras." }
          ]
        },
        {
          id: "ibm-step-3",
          title: "3. Deep Learning with Keras and TensorFlow",
          badge: "Course 3 / 13",
          duration: "23 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>" },
            { label: "الأداة الرئيسية", text: "TensorFlow 2.x, Keras, TensorBoard." },
            { label: "المحاور والوحدات", text: "<br>• TensorFlow computational graphs, low-level operations & Keras integration.<br>• Convolutional Neural Networks (CNNs): Feature extraction, Convolution & Pooling layers.<br>• Recurrent Neural Networks (RNNs) & LSTMs for time series and NLP.<br>• Unsupervised architectures: Autoencoders & Restricted Boltzmann Machines (RBMs)." },
            { label: "المخرجات", text: "بناء معماريات CNN لمعالجة الصور وشبكات RNN/LSTM للسلاسل الزمنية وفهم النماذج غير الخاضعة للإشراف." }
          ]
        },
        {
          id: "ibm-step-4",
          title: "4. Introduction to Neural Networks and PyTorch",
          badge: "Course 4 / 13",
          duration: "19 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>" },
            { label: "الأداة الرئيسية", text: "PyTorch (torch, torch.nn, torch.optim, Autograd)." },
            { label: "المحاور والوحدات", text: "<br>• PyTorch Tensors manipulation & Automatic Differentiation (Autograd).<br>• Implementing Linear and Logistic Regression from scratch in PyTorch.<br>• Deep Neural Network (DNN) architectures with torch.nn.<br>• Loss functions, optimization routines (torch.optim), and Regularization (Dropout)." },
            { label: "المخرجات", text: "إتقان التلاعب بالـ Tensors وبناء نماذج الانحدار والشبكات العصبونية العميقة المخصصة من الصفر في PyTorch." }
          ]
        },
        {
          id: "ibm-step-5",
          title: "5. Deep Learning with PyTorch",
          badge: "Course 5 / 13",
          duration: "21 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>" },
            { label: "الأداة الرئيسية", text: "PyTorch, torchvision, CUDA / GPU." },
            { label: "المحاور والوحدات", text: "<br>• Advanced Computer Vision pipelines with CNNs & torchvision.<br>• Transfer Learning & fine-tuning pre-trained models (ResNet, VGG).<br>• Sequential modeling with PyTorch LSTMs & GRUs.<br>• Model evaluation, checkpointing, saving, and deployment best practices." },
            { label: "المخرجات", text: "تطبيق التعلم بنقل المعرفة (Transfer Learning) على أحدث شبكات الرؤية الحاسوبية وحفظ واسترجاع نقاط الفحص للنماذج." }
          ]
        },
        {
          id: "ibm-step-6",
          title: "6. AI Capstone Project with Deep Learning",
          badge: "Course 6 / 13",
          duration: "15 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/learn/ai-capstone-project-with-deep-learning' target='_blank'>https://www.coursera.org/learn/ai-capstone-project-with-deep-learning</a>" },
            { label: "الأداة الرئيسية", text: "PyTorch / Keras, ResNet-18, Computer Vision Pipeline." },
            { label: "المحاور والوحدات", text: "<br>• End-to-End deep learning pipeline: Concrete Crack Detection & Classification.<br>• Large-scale image data preprocessing, transformation, and augmentation.<br>• Training custom CNNs vs. Pre-trained ResNet-18 architectures.<br>• Rigorous metric evaluation (Precision, Recall, ROC-AUC) & final project reporting." },
            { label: "المخرجات", text: "بناء مشروع تخرج عملي متكامل لتصنيف التشققات الخرسانية باستخدام التعلم العميق ونشر تقرير التقييم النهائي." }
          ]
        },
        {
          id: "ibm-step-7",
          title: "7. Generative AI and LLMs: Architecture and Data Preparation",
          badge: "Course 7 / 13",
          duration: "6 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "Tokenizers (BPE, WordPiece), Vector Embeddings, Preprocessing Pipelines." },
            { label: "المحاور والوحدات", text: "<br>• Generative vs. Discriminative AI paradigms.<br>• Evolution and core foundations of Large Language Models (LLMs).<br>• Tokenization strategies (BPE, WordPiece) & vector embeddings.<br>• Dataset collection, sanitation, and preprocessing pipelines for Generative models." },
            { label: "المخرجات", text: "فهم المعمارية الرياضية للنماذج التوليدية وتجهيز وتنظيف مجموعات البيانات الضخمة لتدريب نماذج اللغة." }
          ]
        },
        {
          id: "ibm-step-8",
          title: "8. Gen AI Foundational Models for NLP & Language",
          badge: "Course 8 / 13",
          duration: "10 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "Foundation Models, Hugging Face Hub, Evaluation Benchmarks." },
            { label: "المحاور والوحدات", text: "<br>• Evolution of NLP architectures & Pre-trained Foundation Models.<br>• Semantic embeddings and context comprehension.<br>• Downstream task execution: Summarization, Sentiment Analysis, Text Classification.<br>• Benchmarking and qualitative evaluation of language models." },
            { label: "المخرجات", text: "توظيف النماذج التأسيسية لتنفيذ مهام التلخيص وتحليل المشاعر وتصنيف النصوص وتقييم دقة النماذج." }
          ]
        },
        {
          id: "ibm-step-9",
          title: "9. Generative AI Language Modeling with Transformers",
          badge: "Course 9 / 13",
          duration: "9 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "Transformers (BERT, GPT, T5), Self-Attention Mechanisms." },
            { label: "المحاور والوحدات", text: "<br>• Transformer architecture deep dive: Encoder-Decoder mechanism.<br>• Self-Attention, Multi-Head Attention, Scaled Dot-Product Attention.<br>• Positional Encodings & Attention Masking techniques.<br>• Comparative study: Encoder-only (BERT), Decoder-only (GPT), Sequence-to-Sequence (T5)." },
            { label: "المخرجات", text: "فهم عميق وتطبيقي لمعمارية المحولات وآلية الانتباه والمقارنة بين نماذج التوليد والتمثيل." }
          ]
        },
        {
          id: "ibm-step-10",
          title: "10. Generative AI Engineering and Fine-Tuning Transformers",
          badge: "Course 10 / 13",
          duration: "8 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "Hugging Face Transformers, Prompt Engineering (CoT), BLEU / ROUGE." },
            { label: "المحاور والوحدات", text: "<br>• Advanced Prompt Engineering: Few-Shot, Zero-Shot, Chain-of-Thought (CoT).<br>• Fine-tuning Transformer architectures via Hugging Face (transformers library).<br>• Domain specialization & task-specific adaptation.<br>• Text generation metrics: BLEU, ROUGE, and Perplexity." },
            { label: "المخرجات", text: "إتقان هندسة التعليمات المتقدمة وضبط وتخصيص نماذج المحولات لمهام ومجالات تخصصية محددة." }
          ]
        },
        {
          id: "ibm-step-11",
          title: "11. Generative AI Advanced Fine-Tuning for LLMs",
          badge: "Course 11 / 13",
          duration: "9 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "PEFT, LoRA, QLoRA, Quantization (4-bit/8-bit), RLHF." },
            { label: "المحاور والوحدات", text: "<br>• Parameter-Efficient Fine-Tuning (PEFT) methodologies.<br>• LoRA (Low-Rank Adaptation) & QLoRA Implementation for memory/compute optimization.<br>• Quantization techniques (8-bit, 4-bit) for efficient model hosting.<br>• Reinforcement Learning from Human Feedback (RLHF) & Safety/Alignment techniques." },
            { label: "المخرجات", text: "تكييف النماذج اللغوية الضخمة على الحواسب العادية باستخدام LoRA و QLoRA وتطبيق محاذاة الأمان." }
          ]
        },
        {
          id: "ibm-step-12",
          title: "12. Fundamentals of AI Agents Using RAG and LangChain",
          badge: "Course 12 / 13",
          duration: "9 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "LangChain, ChromaDB, FAISS, Tools & Function Calling." },
            { label: "المحاور والوحدات", text: "<br>• Retrieval-Augmented Generation (RAG) architecture and vector retrieval pipeline.<br>• Vector Databases: ChromaDB, FAISS, embeddings storage, and similarity querying.<br>• LangChain ecosystem: Chains, Memory, PromptTemplates, Output Parsers.<br>• Designing Autonomous AI Agents equipped with tools and function calling." },
            { label: "المخرجات", text: "بناء خطوط استرجاع RAG وتصميم وكلاء أذكياء (AI Agents) قادرين على استخدام الأدوات وقواعد البيانات." }
          ]
        },
        {
          id: "ibm-step-13",
          title: "13. Project: Generative AI Applications with RAG and LangChain",
          badge: "Course 13 / 13 (Capstone)",
          duration: "9 Hours",
          items: [
            { label: "المصدر والرابط المباشر", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "الأداة الرئيسية", text: "LangChain, RAG Pipeline, Vector Stores, Gradio / Streamlit." },
            { label: "المحاور والوحدات", text: "<br>• Capstone Project: Production-grade End-to-End GenAI Application.<br>• Building a multi-document Question-Answering (QA) bot using LangChain & RAG.<br>• Vector store indexing, retriever tuning, and source citation integration.<br>• Developing and deploying an interactive UI using Gradio / Streamlit." },
            { label: "المخرجات", text: "بناء ونشر تطبيق ذكاء اصطناعي توليدي تفاعلي متكامل يجيب على الأسئلة من عدة مستندات بدقة مع واجهة مستخدم." }
          ]
        }
      ]
    },
    en: {
      heroBadge: "IBM Professional Curriculum",
      heroTitle: "IBM AI Engineering Professional Certificate (13 Courses)",
      heroSubtitle: "Official 13-Course Specialization Syllabus & Core Concepts Overview with Prerequisites & Capstones",
      pdfBtnText: "Export PDF",
      trackLabel: "Select Track:",
      bannerImg: "./assets/images/IBM_Roadmap.png",
      specialization: {
        title: "Direct Full Professional Certificate Link on Coursera:",
        url: "https://www.coursera.org/professional-certificates/ai-engineer"
      },
      stages: [
        {
          id: "ibm-step-0",
          title: "0. Python for Data Science (Prerequisite)",
          badge: "Prerequisite",
          duration: "Foundational",
          items: [
            { label: "Source & Links", text: "Kaggle Learn (<a href='https://www.kaggle.com/learn/python' target='_blank'>Python</a> | <a href='https://www.kaggle.com/learn/pandas' target='_blank'>Pandas</a> | <a href='https://www.kaggle.com/learn/data-visualization' target='_blank'>Visualization</a> | <a href='https://www.kaggle.com/learn/data-cleaning' target='_blank'>Cleaning</a>) & NumPy Documentation." },
            { label: "Main Tool", text: "Python, NumPy, Pandas, Matplotlib, Seaborn." },
            { label: "Core Modules", text: "Advanced Python structures, NumPy vectorization, Pandas DataFrame manipulation, and visualization." },
            { label: "Output", text: "Solid programmatic readiness for loading, cleaning, and preparing data for ML/DL pipelines." }
          ]
        },
        {
          id: "ibm-step-1",
          title: "1. Machine Learning with Python",
          badge: "Course 1 / 13",
          duration: "20 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/learn/machine-learning-with-python' target='_blank'>https://www.coursera.org/learn/machine-learning-with-python</a>" },
            { label: "Main Tool", text: "Scikit-learn, SciPy, Pandas, NumPy." },
            { label: "Core Modules", text: "<br>• Supervised vs. Unsupervised Learning fundamentals.<br>• Regression: Simple, Multiple & Non-linear Regression, Model Evaluation (MSE, R²).<br>• Classification: KNN, Decision Trees, Logistic Regression, Support Vector Machines (SVM).<br>• Clustering: k-Means, Hierarchical Clustering, DBSCAN.<br>• Recommender Systems: Content-based & Collaborative Filtering." },
            { label: "Output", text: "Build, evaluate, and fine-tune classical supervised and unsupervised ML models and recommendation engines." }
          ]
        },
        {
          id: "ibm-step-2",
          title: "2. Introduction to Deep Learning & Neural Networks with Keras",
          badge: "Course 2 / 13",
          duration: "10 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/learn/introduction-to-deep-learning-with-keras' target='_blank'>https://www.coursera.org/learn/introduction-to-deep-learning-with-keras</a>" },
            { label: "Main Tool", text: "Keras, TensorFlow, Python." },
            { label: "Core Modules", text: "<br>• Foundations of Deep Learning & Artificial Neurons.<br>• Activation Functions (ReLU, Sigmoid, Softmax) & Forward Propagation.<br>• Backpropagation & Gradient Descent optimization.<br>• Building and compiling Sequential Neural Networks using Keras.<br>• Architectural overview: CNNs, RNNs & Autoencoders." },
            { label: "Output", text: "Construct and compile multi-layer artificial neural networks from scratch using high-level Keras APIs." }
          ]
        },
        {
          id: "ibm-step-3",
          title: "3. Deep Learning with Keras and TensorFlow",
          badge: "Course 3 / 13",
          duration: "23 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>" },
            { label: "Main Tool", text: "TensorFlow 2.x, Keras, TensorBoard." },
            { label: "Core Modules", text: "<br>• TensorFlow computational graphs, low-level operations & Keras integration.<br>• Convolutional Neural Networks (CNNs): Feature extraction, Convolution & Pooling layers.<br>• Recurrent Neural Networks (RNNs) & LSTMs for time series and NLP.<br>• Unsupervised architectures: Autoencoders & Restricted Boltzmann Machines (RBMs)." },
            { label: "Output", text: "Design CNN computer vision pipelines, sequential RNN/LSTM architectures, and unsupervised autoencoders." }
          ]
        },
        {
          id: "ibm-step-4",
          title: "4. Introduction to Neural Networks and PyTorch",
          badge: "Course 4 / 13",
          duration: "19 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>" },
            { label: "Main Tool", text: "PyTorch (torch, torch.nn, torch.optim, Autograd)." },
            { label: "Core Modules", text: "<br>• PyTorch Tensors manipulation & Automatic Differentiation (Autograd).<br>• Implementing Linear and Logistic Regression from scratch in PyTorch.<br>• Deep Neural Network (DNN) architectures with torch.nn.<br>• Loss functions, optimization routines (torch.optim), and Regularization (Dropout)." },
            { label: "Output", text: "Master dynamic tensor manipulation, automatic differentiation, and build custom PyTorch deep neural networks." }
          ]
        },
        {
          id: "ibm-step-5",
          title: "5. Deep Learning with PyTorch",
          badge: "Course 5 / 13",
          duration: "21 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>" },
            { label: "Main Tool", text: "PyTorch, torchvision, CUDA / GPU." },
            { label: "Core Modules", text: "<br>• Advanced Computer Vision pipelines with CNNs & torchvision.<br>• Transfer Learning & fine-tuning pre-trained models (ResNet, VGG).<br>• Sequential modeling with PyTorch LSTMs & GRUs.<br>• Model evaluation, checkpointing, saving, and deployment best practices." },
            { label: "Output", text: "Apply Transfer Learning using state-of-the-art vision models, custom DataLoaders, and model checkpointing." }
          ]
        },
        {
          id: "ibm-step-6",
          title: "6. AI Capstone Project with Deep Learning",
          badge: "Course 6 / 13",
          duration: "15 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/learn/ai-capstone-project-with-deep-learning' target='_blank'>https://www.coursera.org/learn/ai-capstone-project-with-deep-learning</a>" },
            { label: "Main Tool", text: "PyTorch / Keras, ResNet-18, Computer Vision Pipeline." },
            { label: "Core Modules", text: "<br>• End-to-End deep learning pipeline: Concrete Crack Detection & Classification.<br>• Large-scale image data preprocessing, transformation, and augmentation.<br>• Training custom CNNs vs. Pre-trained ResNet-18 architectures.<br>• Rigorous metric evaluation (Precision, Recall, ROC-AUC) & final project reporting." },
            { label: "Output", text: "Deliver an end-to-end computer vision capstone project classifying concrete cracks with full performance reporting." }
          ]
        },
        {
          id: "ibm-step-7",
          title: "7. Generative AI and LLMs: Architecture and Data Preparation",
          badge: "Course 7 / 13",
          duration: "6 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "Tokenizers (BPE, WordPiece), Vector Embeddings, Preprocessing Pipelines." },
            { label: "Core Modules", text: "<br>• Generative vs. Discriminative AI paradigms.<br>• Evolution and core foundations of Large Language Models (LLMs).<br>• Tokenization strategies (BPE, WordPiece) & vector embeddings.<br>• Dataset collection, sanitation, and preprocessing pipelines for Generative models." },
            { label: "Output", text: "Understand Generative AI foundations and construct robust data preprocessing pipelines for LLM architectures." }
          ]
        },
        {
          id: "ibm-step-8",
          title: "8. Gen AI Foundational Models for NLP & Language",
          badge: "Course 8 / 13",
          duration: "10 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "Foundation Models, Hugging Face Hub, Evaluation Benchmarks." },
            { label: "Core Modules", text: "<br>• Evolution of NLP architectures & Pre-trained Foundation Models.<br>• Semantic embeddings and context comprehension.<br>• Downstream task execution: Summarization, Sentiment Analysis, Text Classification.<br>• Benchmarking and qualitative evaluation of language models." },
            { label: "Output", text: "Leverage pretrained foundation models to execute summarization, sentiment analysis, and downstream NLP tasks." }
          ]
        },
        {
          id: "ibm-step-9",
          title: "9. Generative AI Language Modeling with Transformers",
          badge: "Course 9 / 13",
          duration: "9 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "Transformers (BERT, GPT, T5), Self-Attention Mechanisms." },
            { label: "Core Modules", text: "<br>• Transformer architecture deep dive: Encoder-Decoder mechanism.<br>• Self-Attention, Multi-Head Attention, Scaled Dot-Product Attention.<br>• Positional Encodings & Attention Masking techniques.<br>• Comparative study: Encoder-only (BERT), Decoder-only (GPT), Sequence-to-Sequence (T5)." },
            { label: "Output", text: "Deep architectural understanding of Attention layers, Transformer blocks, and encoder-decoder paradigms." }
          ]
        },
        {
          id: "ibm-step-10",
          title: "10. Generative AI Engineering and Fine-Tuning Transformers",
          badge: "Course 10 / 13",
          duration: "8 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "Hugging Face Transformers, Prompt Engineering (CoT), BLEU / ROUGE." },
            { label: "Core Modules", text: "<br>• Advanced Prompt Engineering: Few-Shot, Zero-Shot, Chain-of-Thought (CoT).<br>• Fine-tuning Transformer architectures via Hugging Face (transformers library).<br>• Domain specialization & task-specific adaptation.<br>• Text generation metrics: BLEU, ROUGE, and Perplexity." },
            { label: "Output", text: "Master advanced prompt engineering and fine-tune Transformer models for domain-specific language generation." }
          ]
        },
        {
          id: "ibm-step-11",
          title: "11. Generative AI Advanced Fine-Tuning for LLMs",
          badge: "Course 11 / 13",
          duration: "9 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "PEFT, LoRA, QLoRA, Quantization (4-bit/8-bit), RLHF." },
            { label: "Core Modules", text: "<br>• Parameter-Efficient Fine-Tuning (PEFT) methodologies.<br>• LoRA (Low-Rank Adaptation) & QLoRA Implementation for memory/compute optimization.<br>• Quantization techniques (8-bit, 4-bit) for efficient model hosting.<br>• Reinforcement Learning from Human Feedback (RLHF) & Safety/Alignment techniques." },
            { label: "Output", text: "Apply state-of-the-art PEFT/LoRA adapters and quantization to fine-tune billion-parameter LLMs on modest hardware." }
          ]
        },
        {
          id: "ibm-step-12",
          title: "12. Fundamentals of AI Agents Using RAG and LangChain",
          badge: "Course 12 / 13",
          duration: "9 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "LangChain, ChromaDB, FAISS, Tools & Function Calling." },
            { label: "Core Modules", text: "<br>• Retrieval-Augmented Generation (RAG) architecture and vector retrieval pipeline.<br>• Vector Databases: ChromaDB, FAISS, embeddings storage, and similarity querying.<br>• LangChain ecosystem: Chains, Memory, PromptTemplates, Output Parsers.<br>• Designing Autonomous AI Agents equipped with tools and function calling." },
            { label: "Output", text: "Build production-ready RAG retrieval pipelines and design autonomous tool-calling AI agents with LangChain." }
          ]
        },
        {
          id: "ibm-step-13",
          title: "13. Project: Generative AI Applications with RAG and LangChain",
          badge: "Course 13 / 13 (Capstone)",
          duration: "9 Hours",
          items: [
            { label: "Direct Course Link", text: "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>" },
            { label: "Main Tool", text: "LangChain, RAG Pipeline, Vector Stores, Gradio / Streamlit." },
            { label: "Core Modules", text: "<br>• Capstone Project: Production-grade End-to-End GenAI Application.<br>• Building a multi-document Question-Answering (QA) bot using LangChain & RAG.<br>• Vector store indexing, retriever tuning, and source citation integration.<br>• Developing and deploying an interactive UI using Gradio / Streamlit." },
            { label: "Output", text: "Develop and deploy a complete production-grade multi-document GenAI RAG application with an interactive user interface." }
          ]
        }
      ]
    }
  },

  // ================= 2. ANDREW NG / DEEPLEARNING.AI TRACK =================
  andrew: {
    ar: {
      heroBadge: "DeepLearning.AI Curriculum",
      heroTitle: "مسار DeepLearning.AI — مهندس الذكاء الاصطناعي (0 - 12)",
      heroSubtitle: "دليل منهجي تطبيقي للانتقال من الأساسيات إلى بناء ونشر أنظمة الـ AI و RAG والوكلاء الأذكياء",
      pdfBtnText: "تصدير PDF",
      trackLabel: "اختر المسار:",
      bannerImg: "./assets/images/roadmap.png",
      stages: [
        {
          id: "step-0",
          title: "0. Python for Data Science",
          badge: "المرحلة التأسيسية",
          duration: "متطلب أساسي",
          items: [
            { label: "المصدر والرابط", text: "Kaggle Learn (<a href='https://www.kaggle.com/learn/python' target='_blank'>Python</a> | <a href='https://www.kaggle.com/learn/pandas' target='_blank'>Pandas</a> | <a href='https://www.kaggle.com/learn/data-visualization' target='_blank'>Visualization</a> | <a href='https://www.kaggle.com/learn/data-cleaning' target='_blank'>Cleaning</a>) وتوثيق NumPy." },
            { label: "الأداة الرئيسية", text: "Python, NumPy, Pandas, Matplotlib, Seaborn, Jupyter, Google Colab." },
            { label: "المحاور والوحدات", text: "<br>• Python Fundamentals: Functions, Data Structures, OOP, List Comprehensions.<br>• NumPy: Vectorized Operations, Broadcasting, Matrix Multiplication, Slicing.<br>• Pandas: Series, DataFrames, Data Cleaning, GroupBy, Merging, Exporting.<br>• Data Visualization: Line, Bar, Scatter, Box plots via Matplotlib & Seaborn.<br>• Environment: Jupyter Notebooks & Google Colab GPU runtimes." },
            { label: "المخرجات", text: "تحميل وفحص وتنظيف وتمثيل مجموعات البيانات بيانياً وتجهيزها لبناء النماذج." }
          ]
        },
        {
          id: "step-1",
          title: "1. Machine Learning Specialization",
          badge: "DeepLearning.AI / Andrew Ng",
          duration: "90 Hours",
          items: [
            { label: "المصدر الأساسي والرابط", text: "Machine Learning Specialization — DeepLearning.AI: <a href='https://www.coursera.org/specializations/machine-learning-introduction' target='_blank'>https://www.coursera.org/specializations/machine-learning-introduction</a>" },
            { label: "الأداة الرئيسية", text: "Scikit-learn, Python, NumPy." },
            { label: "الكورسات والوحدات الرسمية (Specialization Courses)", text: "<br>• <strong>Course 1: Supervised Machine Learning: Regression and Classification:</strong><br>&nbsp;&nbsp;Linear Regression with One & Multiple Variables, Cost Function, Gradient Descent, Logistic Regression, Overfitting & Regularization.<br>• <strong>Course 2: Advanced Learning Algorithms:</strong><br>&nbsp;&nbsp;Neural Networks Intuition & Forward Propagation, Activation Functions, Neural Network Training, Decision Trees, Ensemble Methods (Random Forests & XGBoost).<br>• <strong>Course 3: Unsupervised Learning, Recommenders, Reinforcement Learning:</strong><br>&nbsp;&nbsp;K-Means Clustering, Anomaly Detection with Gaussian Distribution, Content-based & Collaborative Filtering, Reinforcement Learning (Q-Learning)." },
            { label: "المخرجات", text: "بناء خط عمل متكامل لتجهيز وتدريب وتقييم نماذج تعلم الآلة التقليدية والمتقدمة." }
          ]
        },
        {
          id: "step-2",
          title: "2. Mathematics for Machine Learning and Data Science",
          badge: "مسار موازٍ عند الحاجة",
          duration: "70 Hours",
          items: [
            { label: "المصدر الأساسي والرابط", text: "Mathematics for Machine Learning and Data Science Specialization: <a href='https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science' target='_blank'>https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science</a>" },
            { label: "الأداة الرئيسية", text: "NumPy, SciPy, Matplotlib." },
            { label: "الكورسات والوحدات الرسمية (Specialization Courses)", text: "<br>• <strong>Course 1: Linear Algebra for Machine Learning and Data Science:</strong><br>&nbsp;&nbsp;Vectors and Linear Combinations, Matrices and Linear Transformations, Matrix Elimination, Determinants, Eigenvalues and Eigenvectors.<br>• <strong>Course 2: Calculus for Machine Learning and Data Science:</strong><br>&nbsp;&nbsp;Derivatives and Optimization, Partial Derivatives, Gradients and Gradient Descent, Neural Network Optimization Math.<br>• <strong>Course 3: Probability & Statistics for Machine Learning & Data Science:</strong><br>&nbsp;&nbsp;Probability Distributions, Bayes' Rule, Expectation and Variance, Maximum Likelihood Estimation, Hypothesis Testing." },
            { label: "المخرجات", text: "امتلاك الفهم الرياضي العميق والقدرة على تفسير وتحسين خوارزميات التعلم." }
          ]
        },
        {
          id: "step-3",
          title: "3. Deep Learning Specialization",
          badge: "DeepLearning.AI / Andrew Ng",
          duration: "135 Hours",
          items: [
            { label: "المصدر الأساسي والرابط", text: "Deep Learning Specialization — DeepLearning.AI: <a href='https://www.coursera.org/specializations/deep-learning' target='_blank'>https://www.coursera.org/specializations/deep-learning</a>" },
            { label: "الأداة الرئيسية", text: "TensorFlow, Keras, Python." },
            { label: "الكورسات والوحدات الرسمية (Specialization Courses)", text: "<br>• <strong>Course 1: Neural Networks and Deep Learning:</strong><br>&nbsp;&nbsp;Building Vectorized Neural Networks, Forward & Backpropagation, Deep L-layer Neural Networks.<br>• <strong>Course 2: Improving Deep Neural Networks: Hyperparameter Tuning, Regularization & Optimization:</strong><br>&nbsp;&nbsp;Initialization, L2 & Dropout Regularization, Mini-batch Gradient Descent, RMSprop, Adam, Batch Normalization.<br>• <strong>Course 3: Structuring Machine Learning Projects:</strong><br>&nbsp;&nbsp;Orthogonalization, Error Analysis, Mismatched Training/Dev sets, Transfer Learning & Multi-task Learning.<br>• <strong>Course 4: Convolutional Neural Networks (CNNs):</strong><br>&nbsp;&nbsp;Convolutions, Pooling, Classic Networks (ResNet, Inception), Object Detection (YOLO), Face Recognition, Neural Style Transfer.<br>• <strong>Course 5: Sequence Models:</strong><br>&nbsp;&nbsp;RNNs, GRUs, LSTMs, Word Embeddings (Word2Vec, GloVe), Beam Search, Attention Mechanism & Transformer Network intro." },
            { label: "المخرجات", text: "بناء وتدريب وتطوير مختلف المعماريات العميقة (MLP, CNN, RNN, Transformers) من الصفر." }
          ]
        },
        {
          id: "step-4",
          title: "4. Deep Learning Frameworks (TensorFlow & PyTorch)",
          badge: "أطر العمل التطبيقية",
          duration: "45 Hours",
          items: [
            { label: "المصادر والروابط", text: "<br>• Official TensorFlow Tutorials: <a href='https://www.tensorflow.org/tutorials' target='_blank'>https://www.tensorflow.org/tutorials</a><br>• Official PyTorch Tutorials: <a href='https://docs.pytorch.org/tutorials/beginner/basics/intro.html' target='_blank'>https://docs.pytorch.org/tutorials/beginner/basics/intro.html</a>" },
            { label: "الأداة الرئيسية", text: "PyTorch & TensorFlow / Keras." },
            { label: "المحاور والوحدات", text: "<br>• <strong>TensorFlow & Keras:</strong> Sequential & Functional APIs, Model Training & Callbacks, Academic Alignment.<br>• <strong>PyTorch Core:</strong> Tensors, Autograd, Custom nn.Module, DataLoaders, Custom Training/Validation Loops, GPU Acceleration (CUDA)." },
            { label: "المخرجات", text: "بناء وتدريب النماذج في كلا الإطارين مع احتراف PyTorch كإطار عمل رئيسي للتطبيقات الحديثة." }
          ]
        },
        {
          id: "step-5",
          title: "5. Natural Language Processing Specialization",
          badge: "DeepLearning.AI / Younes Bensouda",
          duration: "80 Hours",
          items: [
            { label: "المصدر الأساسي والرابط", text: "Natural Language Processing Specialization: <a href='https://www.coursera.org/specializations/natural-language-processing' target='_blank'>https://www.coursera.org/specializations/natural-language-processing</a>" },
            { label: "الأداة الرئيسية", text: "NLTK, SpaCy, Trax, TensorFlow." },
            { label: "الكورسات والوحدات الرسمية (Specialization Courses)", text: "<br>• <strong>Course 1: NLP with Classification and Vector Spaces:</strong><br>&nbsp;&nbsp;Sentiment Analysis with Logistic Regression & Naive Bayes, Vector Space Models, Word Embeddings, Locality Sensitive Hashing.<br>• <strong>Course 2: NLP with Probabilistic Models:</strong><br>&nbsp;&nbsp;Auto-correct & Minimum Edit Distance, Part-of-Speech (POS) Tagging with Hidden Markov Models, N-gram Language Modeling.<br>• <strong>Course 3: NLP with Sequence Models:</strong><br>&nbsp;&nbsp;Neural Networks for Sentiment, Recurrent Neural Networks (RNNs) & GRUs, Named Entity Recognition (NER), Siamese Networks.<br>• <strong>Course 4: NLP with Attention Models:</strong><br>&nbsp;&nbsp;Encoder-Decoder Architectures, Attention Mechanism, Transformer Models, Machine Translation, Summarization, Question-Answering (T5, BERT)." },
            { label: "المخرجات", text: "بناء أنظمة متقدمة لفهم اللغات الطبيعية وتصنيف النصوص والترجمة الآلية." }
          ]
        },
        {
          id: "step-6",
          title: "6. Transformers & Hugging Face",
          badge: "المحولات الحديثة",
          duration: "35 Hours",
          items: [
            { label: "المصدر الأساسي والرابط", text: "Hugging Face Course (مجاني ورسمي): <a href='https://huggingface.co/learn/nlp-course/chapter1/1' target='_blank'>https://huggingface.co/learn/nlp-course/chapter1/1</a>" },
            { label: "الأداة الرئيسية", text: "Hugging Face (transformers, datasets, tokenizers, accelerate, Hub)." },
            { label: "المحاور والوحدات", text: "<br>• Transformer Models in Depth: Encoders, Decoders, Sequence-to-Sequence architectures.<br>• Using the Hugging Face Pipeline API for instant inference.<br>• Fine-tuning Pretrained Models with Trainer API and native PyTorch.<br>• Datasets & Fast Tokenizers: Handling large datasets and Byte-Pair Encoding (BPE).<br>• Sharing models and demos on Hugging Face Hub & Spaces." },
            { label: "المخرجات", text: "استخدام وضبط نماذج المحولات الجاهزة وتوظيفها في مهام معالجة النصوص التخصصية." }
          ]
        },
        {
          id: "step-7",
          title: "7. Fine-tuning & Parameter-Efficient Adaptation (PEFT)",
          badge: "التكييف الفعال",
          duration: "25 Hours",
          items: [
            { label: "المصادر والروابط", text: "<br>• Hugging Face PEFT Documentation: <a href='https://huggingface.co/docs/peft/' target='_blank'>https://huggingface.co/docs/peft/</a><br>• LoRA Reference Guide: <a href='https://huggingface.co/docs/peft/package_reference/lora' target='_blank'>https://huggingface.co/docs/peft/package_reference/lora</a>" },
            { label: "الأداة الرئيسية", text: "PEFT, LoRA, QLoRA, bitsandbytes, SFTTrainer." },
            { label: "المحاور والوحدات", text: "<br>• Full Fine-Tuning vs. Parameter-Efficient Fine-Tuning (PEFT).<br>• Low-Rank Adaptation (LoRA) mathematics and matrix decomposition.<br>• QLoRA: Combining 4-bit NormalFloat (NF4) quantization with LoRA adapters.<br>• Supervised Fine-Tuning (SFT) workflows and dataset formatting.<br>• Checkpoint merging, evaluation, and catastrophic forgetting prevention." },
            { label: "المخرجات", text: "تكييف النماذج اللغوية الضخمة على بيانات مجالات تخصصية بأقل استهلاك لموارد الـ GPU." }
          ]
        },
        {
          id: "step-8",
          title: "8. Large Language Models (LLMs) & Engineering",
          badge: "هندسة النماذج اللغوية",
          duration: "30 Hours",
          items: [
            { label: "المصادر والروابط", text: "التوثيقات الرسمية للنماذج المفتوحة (Llama, Mistral) والواجهات السحابية التجارية." },
            { label: "الأداة الرئيسية", text: "OpenAI APIs, Ollama, vLLM, LiteLLM." },
            { label: "المحاور والوحدات", text: "<br>• Advanced Prompt Engineering: Zero-Shot, Few-Shot, Chain-of-Thought (CoT), System Prompts.<br>• Context Window management, token cost calculations, and latency optimization.<br>• Structured Output generation (JSON Mode, Pydantic schemas).<br>• Function & Tool Calling APIs.<br>• Local LLM hosting and high-throughput inference serving with Ollama & vLLM." },
            { label: "المخرجات", text: "بناء تطبيقات برمجية تعتمد على النماذج اللغوية وبرمجتها لتنفيذ مهام محددة بدقة." }
          ]
        },
        {
          id: "step-9",
          title: "9. Retrieval-Augmented Generation (RAG)",
          badge: "التوليد المعزز بالاسترجاع",
          duration: "35 Hours",
          items: [
            { label: "المصادر والروابط", text: "قواعد البيانات الشعاعية ومكتبات الربط الدلالي." },
            { label: "الأداة الرئيسية", text: "FAISS, ChromaDB, Qdrant, LangChain, LlamaIndex." },
            { label: "المحاور والوحدات", text: "<br>• Document Ingestion: Loaders (PDF, Markdown, Web), Chunking strategies (Recursive, Semantic).<br>• Dense Vector Embeddings & Similarity Metrics (Cosine, Euclidean).<br>• Vector Databases setup, indexing, and fast retrieval.<br>• Retrieval Enhancement: Re-ranking (Cohere Rerank), Context Compression, Hybrid Search.<br>• Prompt construction with retrieved context and RAG evaluation metrics (Ragas)." },
            { label: "المخرجات", text: "بناء نظام استرجاع وإجابة ذكي معتمد على مستندات وملفات معرفية خاصة دون هلوسة." }
          ]
        },
        {
          id: "step-10",
          title: "10. AI Engineering & Production Deployment",
          badge: "النشر والإنتاج",
          duration: "40 Hours",
          items: [
            { label: "المصادر والروابط", text: "<br>• Official FastAPI Tutorial: <a href='https://fastapi.tiangolo.com/tutorial/' target='_blank'>https://fastapi.tiangolo.com/tutorial/</a><br>• Official Docker Documentation: <a href='https://docs.docker.com/get-started/' target='_blank'>https://docs.docker.com/get-started/</a>" },
            { label: "الأداة الرئيسية", text: "FastAPI, Pydantic, Docker, Docker Compose, Uvicorn." },
            { label: "المحاور والوحدات", text: "<br>• FastAPI: Asynchronous REST endpoints, Pydantic validation, serving PyTorch/ML models.<br>• Backend Integration: Connecting FastAPI AI microservices with Laravel and ASP.NET Core systems.<br>• Containerization: Writing optimized Dockerfiles for PyTorch/CUDA, Docker Compose multi-container setups.<br>• Monitoring, logging, latency tracking, and persistent volume management." },
            { label: "المخرجات", text: "تحويل النماذج إلى خدمات وواجهات برمجية مصغرة جاهزة للإنتاج والاستهلاك في التطبيقات." }
          ]
        },
        {
          id: "step-11",
          title: "11. Autonomous AI Agents",
          badge: "الأنظمة الذاتية",
          duration: "35 Hours",
          items: [
            { label: "المصادر والروابط", text: "إطار LangChain وتوثيقات بناء الوكلاء الرسمية." },
            { label: "الأداة الرئيسية", text: "LangChain, LangGraph, Tools / Function Calling APIs." },
            { label: "المحاور والوحدات", text: "<br>• Agent Architectures: ReAct (Reasoning + Acting) loops, Plan-and-Solve patterns.<br>• Tool Calling: Binding LLMs to Search engines, SQL databases, calculators, and REST APIs.<br>• Memory & State: Short-term vs. long-term conversation memory and state persistence.<br>• Multi-step workflows, human-in-the-loop validation, and agent performance evaluation." },
            { label: "المخرجات", text: "بناء وكيل ذكي ذاتي قادر على استخدام الأدوات البرمجية وحل المهام المعقدة ذاتياً." }
          ]
        },
        {
          id: "step-12",
          title: "12. Practical Projects & Portfolio",
          badge: "معرض الأعمال والتخرج",
          duration: "60+ Hours",
          items: [
            { label: "المصادر والروابط", text: "منصتا GitHub و Kaggle." },
            { label: "الأداة الرئيسية", text: "Git, GitHub, Full Production AI Stack." },
            { label: "المحاور والمشاريع التطبيقية", text: "<br>• Project 1 — Classical ML: End-to-End Tabular Prediction & Evaluation Pipeline.<br>• Project 2 — Deep Learning: PyTorch Vision/Sequence Model with Custom Metrics.<br>• Project 3 — NLP: Arabic Sentiment Analysis Benchmark (TF-IDF vs. LSTM vs. BERT).<br>• Project 4 — RAG System: University/Enterprise Knowledge Assistant with ChromaDB.<br>• Project 5 — Autonomous Agent: Multi-tool AI Research Assistant with LangChain.<br>• Final Graduation Project: Production-grade AI Application with FastAPI, Docker, and full documentation." },
            { label: "المخرجات", text: "معرض أعمال تطبيقي مثبت على GitHub يبرهن الكفاءة في هندسة وبناء ونشر أنظمة الذكاء الاصطناعي." }
          ]
        }
      ]
    },
    en: {
      heroBadge: "DeepLearning.AI Curriculum",
      heroTitle: "DeepLearning.AI — AI Engineer Roadmap (0 - 12)",
      heroSubtitle: "An applied, end-to-end curriculum from data foundations to LLMs, RAG, and Autonomous AI Agents",
      pdfBtnText: "Export PDF",
      trackLabel: "Select Track:",
      bannerImg: "./assets/images/roadmap.png",
      stages: [
        {
          id: "step-0",
          title: "0. Python for Data Science",
          badge: "Foundations",
          duration: "Prerequisite",
          items: [
            { label: "Source & Links", text: "Kaggle Learn (<a href='https://www.kaggle.com/learn/python' target='_blank'>Python</a> | <a href='https://www.kaggle.com/learn/pandas' target='_blank'>Pandas</a> | <a href='https://www.kaggle.com/learn/data-visualization' target='_blank'>Visualization</a> | <a href='https://www.kaggle.com/learn/data-cleaning' target='_blank'>Cleaning</a>) & NumPy Docs." },
            { label: "Main Tool", text: "Python, NumPy, Pandas, Matplotlib, Seaborn, Jupyter, Google Colab." },
            { label: "Core Modules", text: "<br>• Python Fundamentals: Functions, Data Structures, OOP, List Comprehensions.<br>• NumPy: Vectorized Operations, Broadcasting, Matrix Multiplication, Slicing.<br>• Pandas: Series, DataFrames, Data Cleaning, GroupBy, Merging, Exporting.<br>• Data Visualization: Line, Bar, Scatter, Box plots via Matplotlib & Seaborn.<br>• Environment: Jupyter Notebooks & Google Colab GPU runtimes." },
            { label: "Output", text: "Load, clean, manipulate, and visualize real-world datasets for modeling." }
          ]
        },
        {
          id: "step-1",
          title: "1. Machine Learning Specialization",
          badge: "DeepLearning.AI / Andrew Ng",
          duration: "90 Hours",
          items: [
            { label: "Main Course & Link", text: "Machine Learning Specialization — DeepLearning.AI: <a href='https://www.coursera.org/specializations/machine-learning-introduction' target='_blank'>https://www.coursera.org/specializations/machine-learning-introduction</a>" },
            { label: "Main Tool", text: "Scikit-learn, Python, NumPy." },
            { label: "Specialization Official Courses", text: "<br>• <strong>Course 1: Supervised Machine Learning: Regression and Classification:</strong><br>&nbsp;&nbsp;Linear Regression with One & Multiple Variables, Cost Function, Gradient Descent, Logistic Regression, Overfitting & Regularization.<br>• <strong>Course 2: Advanced Learning Algorithms:</strong><br>&nbsp;&nbsp;Neural Networks Intuition & Forward Propagation, Activation Functions, Neural Network Training, Decision Trees, Ensemble Methods (Random Forests & XGBoost).<br>• <strong>Course 3: Unsupervised Learning, Recommenders, Reinforcement Learning:</strong><br>&nbsp;&nbsp;K-Means Clustering, Anomaly Detection with Gaussian Distribution, Content-based & Collaborative Filtering, Reinforcement Learning (Q-Learning)." },
            { label: "Output", text: "Execute complete classical ML workflows from raw tabular data to an evaluated, tuned final model." }
          ]
        },
        {
          id: "step-2",
          title: "2. Mathematics for Machine Learning and Data Science",
          badge: "Parallel Reference",
          duration: "70 Hours",
          items: [
            { label: "Main Resource & Link", text: "Mathematics for Machine Learning and Data Science Specialization: <a href='https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science' target='_blank'>https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science</a>" },
            { label: "Main Tool", text: "NumPy, SciPy, Matplotlib." },
            { label: "Specialization Official Courses", text: "<br>• <strong>Course 1: Linear Algebra for Machine Learning and Data Science:</strong><br>&nbsp;&nbsp;Vectors and Linear Combinations, Matrices and Linear Transformations, Matrix Elimination, Determinants, Eigenvalues and Eigenvectors.<br>• <strong>Course 2: Calculus for Machine Learning and Data Science:</strong><br>&nbsp;&nbsp;Derivatives and Optimization, Partial Derivatives, Gradients and Gradient Descent, Neural Network Optimization Math.<br>• <strong>Course 3: Probability & Statistics for Machine Learning & Data Science:</strong><br>&nbsp;&nbsp;Probability Distributions, Bayes' Rule, Expectation and Variance, Maximum Likelihood Estimation, Hypothesis Testing." },
            { label: "Output", text: "Understand and apply the mathematical foundations powering optimization and modeling." }
          ]
        },
        {
          id: "step-3",
          title: "3. Deep Learning Specialization",
          badge: "DeepLearning.AI / Andrew Ng",
          duration: "135 Hours",
          items: [
            { label: "Main Course & Link", text: "Deep Learning Specialization — DeepLearning.AI: <a href='https://www.coursera.org/specializations/deep-learning' target='_blank'>https://www.coursera.org/specializations/deep-learning</a>" },
            { label: "Main Tool", text: "TensorFlow, Keras, Python." },
            { label: "Specialization Official Courses", text: "<br>• <strong>Course 1: Neural Networks and Deep Learning:</strong><br>&nbsp;&nbsp;Building Vectorized Neural Networks, Forward & Backpropagation, Deep L-layer Neural Networks.<br>• <strong>Course 2: Improving Deep Neural Networks: Hyperparameter Tuning, Regularization & Optimization:</strong><br>&nbsp;&nbsp;Initialization, L2 & Dropout Regularization, Mini-batch Gradient Descent, RMSprop, Adam, Batch Normalization.<br>• <strong>Course 3: Structuring Machine Learning Projects:</strong><br>&nbsp;&nbsp;Orthogonalization, Error Analysis, Mismatched Training/Dev sets, Transfer Learning & Multi-task Learning.<br>• <strong>Course 4: Convolutional Neural Networks (CNNs):</strong><br>&nbsp;&nbsp;Convolutions, Pooling, Classic Networks (ResNet, Inception), Object Detection (YOLO), Face Recognition, Neural Style Transfer.<br>• <strong>Course 5: Sequence Models:</strong><br>&nbsp;&nbsp;RNNs, GRUs, LSTMs, Word Embeddings (Word2Vec, GloVe), Beam Search, Attention Mechanism & Transformer Network intro." },
            { label: "Output", text: "Design, train, optimize, and regularize deep neural architectures from scratch." }
          ]
        },
        {
          id: "step-4",
          title: "4. Deep Learning Frameworks (TensorFlow & PyTorch)",
          badge: "Applied Frameworks",
          duration: "45 Hours",
          items: [
            { label: "Main Resources & Links", text: "<br>• Official TensorFlow Tutorials: <a href='https://www.tensorflow.org/tutorials' target='_blank'>https://www.tensorflow.org/tutorials</a><br>• Official PyTorch Tutorials: <a href='https://docs.pytorch.org/tutorials/beginner/basics/intro.html' target='_blank'>https://docs.pytorch.org/tutorials/beginner/basics/intro.html</a>" },
            { label: "Main Tool", text: "PyTorch & TensorFlow / Keras." },
            { label: "Core Modules", text: "<br>• <strong>TensorFlow & Keras:</strong> Sequential & Functional APIs, Model Training & Callbacks, Academic Alignment.<br>• <strong>PyTorch Core:</strong> Tensors, Autograd, Custom nn.Module, DataLoaders, Custom Training/Validation Loops, GPU Acceleration (CUDA)." },
            { label: "Output", text: "Build and train models in both frameworks with PyTorch mastery for modern AI projects." }
          ]
        },
        {
          id: "step-5",
          title: "5. Natural Language Processing Specialization",
          badge: "DeepLearning.AI / Younes Bensouda",
          duration: "80 Hours",
          items: [
            { label: "Main Course & Link", text: "Natural Language Processing Specialization: <a href='https://www.coursera.org/specializations/natural-language-processing' target='_blank'>https://www.coursera.org/specializations/natural-language-processing</a>" },
            { label: "Main Tool", text: "NLTK, SpaCy, Trax, TensorFlow." },
            { label: "Specialization Official Courses", text: "<br>• <strong>Course 1: NLP with Classification and Vector Spaces:</strong><br>&nbsp;&nbsp;Sentiment Analysis with Logistic Regression & Naive Bayes, Vector Space Models, Word Embeddings, Locality Sensitive Hashing.<br>• <strong>Course 2: NLP with Probabilistic Models:</strong><br>&nbsp;&nbsp;Auto-correct & Minimum Edit Distance, Part-of-Speech (POS) Tagging with Hidden Markov Models, N-gram Language Modeling.<br>• <strong>Course 3: NLP with Sequence Models:</strong><br>&nbsp;&nbsp;Neural Networks for Sentiment, Recurrent Neural Networks (RNNs) & GRUs, Named Entity Recognition (NER), Siamese Networks.<br>• <strong>Course 4: NLP with Attention Models:</strong><br>&nbsp;&nbsp;Encoder-Decoder Architectures, Attention Mechanism, Transformer Models, Machine Translation, Summarization, Question-Answering (T5, BERT)." },
            { label: "Output", text: "Build advanced NLP models from tokenization and embeddings up to Transformer-based summarization." }
          ]
        },
        {
          id: "step-6",
          title: "6. Transformers & Hugging Face",
          badge: "Transformers",
          duration: "35 Hours",
          items: [
            { label: "Main Resource & Link", text: "Hugging Face NLP Course (Free & Official): <a href='https://huggingface.co/learn/nlp-course/chapter1/1' target='_blank'>https://huggingface.co/learn/nlp-course/chapter1/1</a>" },
            { label: "Main Tool", text: "Hugging Face (transformers, datasets, tokenizers, accelerate, Hub)." },
            { label: "Core Modules", text: "<br>• Transformer Models in Depth: Encoders, Decoders, Sequence-to-Sequence architectures.<br>• Using the Hugging Face Pipeline API for instant inference.<br>• Fine-tuning Pretrained Models with Trainer API and native PyTorch.<br>• Datasets & Fast Tokenizers: Handling large datasets and Byte-Pair Encoding (BPE).<br>• Sharing models and demos on Hugging Face Hub & Spaces." },
            { label: "Output", text: "Load pretrained models and fine-tune Transformers for specific downstream NLP tasks." }
          ]
        },
        {
          id: "step-7",
          title: "7. Fine-tuning & Parameter-Efficient Adaptation (PEFT)",
          badge: "Efficient Tuning",
          duration: "25 Hours",
          items: [
            { label: "Main Resources & Links", text: "<br>• Hugging Face PEFT Documentation: <a href='https://huggingface.co/docs/peft/' target='_blank'>https://huggingface.co/docs/peft/</a><br>• LoRA Reference Guide: <a href='https://huggingface.co/docs/peft/package_reference/lora' target='_blank'>https://huggingface.co/docs/peft/package_reference/lora</a>" },
            { label: "Main Tool", text: "PEFT, LoRA, QLoRA, bitsandbytes, SFTTrainer." },
            { label: "Core Modules", text: "<br>• Full Fine-Tuning vs. Parameter-Efficient Fine-Tuning (PEFT).<br>• Low-Rank Adaptation (LoRA) mathematics and matrix decomposition.<br>• QLoRA: Combining 4-bit NormalFloat (NF4) quantization with LoRA adapters.<br>• Supervised Fine-Tuning (SFT) workflows and dataset formatting.<br>• Checkpoint merging, evaluation, and catastrophic forgetting prevention." },
            { label: "Output", text: "Adapt large open-source LLMs using low-compute resource setups." }
          ]
        },
        {
          id: "step-8",
          title: "8. Large Language Models (LLMs) & Engineering",
          badge: "LLM Engineering",
          duration: "30 Hours",
          items: [
            { label: "Main Resources & Links", text: "Official documentation for open-source models (Llama, Mistral, Gemma) and cloud LLM APIs." },
            { label: "Main Tool", text: "OpenAI APIs, Ollama, vLLM, LiteLLM." },
            { label: "Core Modules", text: "<br>• Advanced Prompt Engineering: Zero-Shot, Few-Shot, Chain-of-Thought (CoT), System Prompts.<br>• Context Window management, token cost calculations, and latency optimization.<br>• Structured Output generation (JSON Mode, Pydantic schemas).<br>• Function & Tool Calling APIs.<br>• Local LLM hosting and high-throughput inference serving with Ollama & vLLM." },
            { label: "Output", text: "Integrate, control, and deploy LLMs programmatically inside enterprise applications." }
          ]
        },
        {
          id: "step-9",
          title: "9. Retrieval-Augmented Generation (RAG)",
          badge: "Context Retrieval",
          duration: "35 Hours",
          items: [
            { label: "Main Technologies & Links", text: "Vector databases and semantic retrieval frameworks." },
            { label: "Main Tool", text: "FAISS, ChromaDB, Qdrant, LangChain, LlamaIndex." },
            { label: "Core Modules", text: "<br>• Document Ingestion: Loaders (PDF, Markdown, Web), Chunking strategies (Recursive, Semantic).<br>• Dense Vector Embeddings & Similarity Metrics (Cosine, Euclidean).<br>• Vector Databases setup, indexing, and fast retrieval.<br>• Retrieval Enhancement: Re-ranking (Cohere Rerank), Context Compression, Hybrid Search.<br>• Prompt construction with retrieved context and RAG evaluation metrics (Ragas)." },
            { label: "Output", text: "Build private document search and contextual Q&A retrieval systems with zero hallucinations." }
          ]
        },
        {
          id: "step-10",
          title: "10. AI Engineering & Production Deployment",
          badge: "Production & APIs",
          duration: "40 Hours",
          items: [
            { label: "Main Resources & Links", text: "<br>• FastAPI Tutorial: <a href='https://fastapi.tiangolo.com/tutorial/' target='_blank'>https://fastapi.tiangolo.com/tutorial/</a><br>• Docker Docs: <a href='https://docs.docker.com/get-started/' target='_blank'>https://docs.docker.com/get-started/</a>" },
            { label: "Main Tool", text: "FastAPI, Pydantic, Docker, Docker Compose, Uvicorn." },
            { label: "Core Modules", text: "<br>• FastAPI: Asynchronous REST endpoints, Pydantic validation, serving PyTorch/ML models.<br>• Backend Integration: Connecting FastAPI AI microservices with Laravel and ASP.NET Core systems.<br>• Containerization: Writing optimized Dockerfiles for PyTorch/CUDA, Docker Compose multi-container setups.<br>• Monitoring, logging, latency tracking, and persistent volume management." },
            { label: "Output", text: "Deploy containerized AI microservices ready for high-concurrency production usage." }
          ]
        },
        {
          id: "step-11",
          title: "11. Autonomous AI Agents",
          badge: "Autonomous Systems",
          duration: "35 Hours",
          items: [
            { label: "Main Resources & Links", text: "LangChain framework and official agent orchestration documentation." },
            { label: "Main Tool", text: "LangChain, LangGraph, Tools / Function Calling APIs." },
            { label: "Core Modules", text: "<br>• Agent Architectures: ReAct (Reasoning + Acting) loops, Plan-and-Solve patterns.<br>• Tool Calling: Binding LLMs to Search engines, SQL databases, calculators, and REST APIs.<br>• Memory & State: Short-term vs. long-term conversation memory and state persistence.<br>• Multi-step workflows, human-in-the-loop validation, and agent performance evaluation." },
            { label: "Output", text: "Develop autonomous agents capable of using external software tools to resolve complex tasks." }
          ]
        },
        {
          id: "step-12",
          title: "12. Practical Projects & Portfolio",
          badge: "Portfolio & Thesis",
          duration: "60+ Hours",
          items: [
            { label: "Main Resources & Links", text: "GitHub and Kaggle platforms." },
            { label: "Main Tool", text: "Git, GitHub, Full Production AI Stack." },
            { label: "Core Modules", text: "<br>• Project 1 — Classical ML: End-to-End Tabular Prediction & Evaluation Pipeline.<br>• Project 2 — Deep Learning: PyTorch Vision/Sequence Model with Custom Metrics.<br>• Project 3 — NLP: Arabic Sentiment Analysis Benchmark (TF-IDF vs. LSTM vs. BERT).<br>• Project 4 — RAG System: University/Enterprise Knowledge Assistant with ChromaDB.<br>• Project 5 — Autonomous Agent: Multi-tool AI Research Assistant with LangChain.<br>• Final Graduation Project: Production-grade AI Application with FastAPI, Docker, and full documentation." },
            { label: "Output", text: "Establish a robust GitHub portfolio proving applied AI engineering capabilities across all domains." }
          ]
        }
      ]
    }
  }
};